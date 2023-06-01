import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {titleService} from "../../services";


export const getAllTitles = createAsyncThunk(
    'titleSlice/getAllTitles',
    async (_, {rejectWithValue}) => {
        try {
            const titles = await titleService.getAll();
            return titles
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    titlesArr: [],
    status: null,
    error: null,
};


const titleSlice = createSlice({
    name: 'titleSlice',

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getAllTitles.pending, (state) => {
                state.status = 'Loading....'
                state.error = null
            })
            .addCase(getAllTitles.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.titlesArr = action.payload
            })
            .addCase(getAllTitles.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
    }
});

export default titleSlice.reducer;