import { createSlice, Draft } from "@reduxjs/toolkit";
import { createFetchThunk } from "./createFetchThunk";

interface FetchState<T> {
    data: T[];
    totalCount: number;
    isLoading: boolean;
    error: string | null;
}

const defaultInitialState = <T>(): FetchState<T> => ({
    data: [],
    totalCount: 0,
    isLoading: false,
    error: null
});

const createFetchSlice = <T>(name: string) => {
    const fetchThunk = createFetchThunk<{ data: T[]; totalCount: number }>(`${name}/fetchAll`);
    const slice = createSlice({
        name,
        initialState: defaultInitialState<T>(),
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(fetchThunk.pending, (state) => {
                    state.isLoading = true;
                    state.error = null;
                })
                .addCase(fetchThunk.fulfilled, (state, action) => {
                    state.data = action.payload.data as Draft<T[]>;
                    state.totalCount = action.payload.totalCount;
                    state.isLoading = false;
                })
                .addCase(fetchThunk.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = typeof action.payload === 'string'
                        ? action.payload
                        : 'An unknown error occurred';
                });
        }
    });

    return { ...slice, fetchThunk };
};

export default createFetchSlice;