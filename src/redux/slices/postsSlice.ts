import type { PostInterface } from '../../types/Post.Interface'
import createFetchSlice from './createFetchSlice';
import { RootState } from '../store';


const postsSlice = createFetchSlice<PostInterface>('posts');
export const fetchAllPosts = postsSlice.fetchThunk;
export const selectPosts = (state: RootState) => state.posts.data;
export const selectPostsLoading = (state: RootState) => state.posts.isLoading;
export const selectPostsError = (state: RootState) => state.posts.error;

export default postsSlice.reducer;
