import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axios";
// initial sate of the data
const initialState = {
    group: {
        id: 0,
        name: "Unknown",
        options: ["ক", "খ", "গ", "ঘ"],
        questions: [],
    },
    loading: false,
    error: null,
};
// fetch book information
export const fetchGroup = createAsyncThunk("groups/:id", async (id) => {
    const response = await axiosInstance.get(`/brain-bank/groups/${id}`);
    return response.data;
});
// book slice
const groupSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGroup.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchGroup.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload);
            state.group = action.payload;
        })
            .addCase(fetchGroup.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? "Something went wrong";
        });
    },
});
export default groupSlice.reducer;
