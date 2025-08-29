import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { PostInterface } from '../../types/Post.Interface'
import { createFetchThunk } from './createFetchThunk';

const initialState = {
  posts: [] as PostInterface[],
  isLoading: false,
  error: null as string | null
}

export const fetchAllPosts = createFetchThunk<PostInterface[]>('posts/fetchAllPosts');

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
        if (
          action.payload &&
          typeof action.payload === 'object' &&
          'message' in action.payload &&
          typeof (action.payload as any).message === 'string'
        ) {
          state.error = (action.payload as any).message;
        } else {
          state.error = 'An unknown error occurred';
        }
      });
  }
})

export const selectPosts = (state: { posts }) => state.posts.posts;
export const selectPostsLoading = (state: { posts }) => state.posts.isLoading;
export const selectPostsError = (state: { posts }) => state.posts.error;

export default postsSlice.reducer;
