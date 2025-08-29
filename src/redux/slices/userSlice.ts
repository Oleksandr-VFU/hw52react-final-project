import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { UserInterface } from '../../types/User.Interface'
import { createFetchThunk } from './createFetchThunk'

const initialState = {
    users: [] as UserInterface[],
    isLoading: false,
    error: null as string | null
}

export const fetchAllUsers = createFetchThunk<UserInterface>('users/fetchAllUsers');

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action: PayloadAction<UserInterface[]>) => {
                state.users = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.isLoading = false;
                if (action.error && action.error.message) {
                    state.error = action.error.message;
                } else {
                    state.error = 'An unknown error occurred';
                }
            });
    }
})

export const selectUsers = (state: { users }) => state.users.users;
export const selectUsersLoading = (state: { users }) => state.users.isLoading;
export const selectUsersError = (state: { users }) => state.users.error;

export default userSlice.reducer;
