import { RootState } from '../store'
import type { UserInterface } from '../../types/User.Interface'
import createFetchSlice from './createFetchSlice'

const userSlice = createFetchSlice<UserInterface>('users')

export const fetchAllUsers = userSlice.fetchThunk;
export const selectUsers = (state: RootState) => state.users.data;
export const selectUsersLoading = (state: RootState) => state.users.isLoading;
export const selectUsersError = (state: RootState) => state.users.error;

export default userSlice.reducer;
