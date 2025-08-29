import axios, {AxiosError} from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"


export function createFetchThunk<T>(typePrefix: string) {
    return createAsyncThunk<{ data: T[]; totalCount: number }, string, { rejectValue: string }>(typePrefix, async (url, { rejectWithValue }) => {
        try {
            const baseURL = new URL(url)
            baseURL.searchParams.delete('page')
            baseURL.searchParams.delete('limit')

            const totalResponse = await axios.get<T[]>(baseURL.toString())
            const totalCount = totalResponse.data.length

            const response = await axios.get<T[]>(url)

            if (response.status !== 200) {
                throw new Error('Failed to fetch data with status: ' + response.statusText)
            }
            return { data: response.data, totalCount }
        } catch (error) {
            const axiosError = error as AxiosError
            console.error('Error fetching data:', axiosError.message)
            return rejectWithValue(axiosError.message || 'Failed to fetch data')
        }
    })
}