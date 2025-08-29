import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import type { PostInterface } from '../../types/Post.Interface'

interface PostsStateInterface {
  posts: PostInterface[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PostsStateInterface = {
  posts: [],
  isLoading: false,
  error: null
}

export const fetchAllPosts = createAsyncThunk('posts/fetchPosts', async (url: string, { rejectWithValue }) => {
  try {
    const response = await axios.get<PostInterface[]>(url)
    if (response.status !== 200) {
      throw new Error('Failed to fetch posts with status: ' + response.statusText)
    }
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    return rejectWithValue(axiosError.message || 'Failed to fetch posts')
  }
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllPosts.fulfilled, (state, action: PayloadAction<PostInterface[]>) => {
        state.posts = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload instanceof Error) {
          state.error = action.payload.message;
        } else {
          state.error = 'An unknown error occurred';
        }
      });
  }
})

export const selectPosts = (state: { posts: PostsStateInterface }) => state.posts.posts;
export const selectPostsLoading = (state: { posts: PostsStateInterface }) => state.posts.isLoading;
export const selectPostsError = (state: { posts: PostsStateInterface }) => state.posts.error;

export default postsSlice.reducer;
