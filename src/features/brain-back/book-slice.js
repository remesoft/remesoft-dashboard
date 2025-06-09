import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axios";
// initial sate of the data
const initialState = {
    book: {
        id: 0,
        name: "",
        isPublished: false,
        totalChapters: 0,
        totalGroups: 0,
        createdAt: "",
        updatedAt: "",
        chapters: [],
    },
    loading: false,
    error: null,
};
// fetch book information
export const fetchBook = createAsyncThunk("book/:id", async (id) => {
    const response = await axiosInstance.get(`/brain-bank/books/${id}`);
    return response.data;
});
// book slice
const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBook.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchBook.fulfilled, (state, action) => {
            state.loading = false;
            console.log("action", action.payload);
            state.book = action.payload;
        })
            .addCase(fetchBook.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? "Something went wrong";
        });
    },
});
export default bookSlice.reducer;
