import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { UserInterface } from '../../types/User.Interface'
import axios, { AxiosError } from 'axios'

interface UserStateInterface {
    users: UserInterface[]
    isLoading: boolean
    error: string | null
}

const initialState: UserStateInterface = {
    users: [],
    isLoading: false,
    error: null
}

export const fetchAllUsers = createAsyncThunk('user/fetchUsers', async (url: string, { rejectWithValue }) => {
    try {
        const response = await axios.get<UserInterface[]>(url)
        if (response.status !== 200) {
            throw new Error('Failed to fetch users with status: ' + response.statusText)
        }
        return response.data
    } catch (error) {
        const axiosError = error as AxiosError
        return rejectWithValue(axiosError.message || 'Failed to fetch users')
    }
})

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
                if (action.payload instanceof Error) {
                    state.error = action.payload.message;
                } else {
                    state.error = 'An unknown error occurred';
                }
            });
    }
})

export const selectUsers = (state: { users: UserStateInterface }) => state.users.users;
export const selectUsersLoading = (state: { users: UserStateInterface }) => state.users.isLoading;
export const selectUsersError = (state: { users: UserStateInterface }) => state.users.error;

export default userSlice.reducer;
