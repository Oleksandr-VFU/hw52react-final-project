import axios, {AxiosError} from "axios"
import type { UserInterface } from "../../types/User.Interface"
import { createAsyncThunk } from "@reduxjs/toolkit"

export function createFetchThunk<T>(typePrefix: string) {
    return createAsyncThunk<T[], string, { rejectValue: string }>(typePrefix, async (url, { rejectWithValue }) => {
        try {
            const response = await axios.get<T[]>(url)
            if (response.status !== 200) {
                throw new Error('Failed to fetch users with status: ' + response.statusText)
            }
            return response.data
        } catch (error) {
            const axiosError = error as AxiosError
            return rejectWithValue(axiosError.message || 'Failed to fetch users')
        }
    })
}