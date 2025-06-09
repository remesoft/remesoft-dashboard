// src/features/font/fontSlice.ts
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    headingSize: "text-2xl",
    paragraphSize: "text-base",
};
const theme = createSlice({
    name: "font",
    initialState,
    reducers: {
        setHeadingSize: (state, action) => {
            state.headingSize = action.payload;
        },
        setParagraphSize: (state, action) => {
            state.paragraphSize = action.payload;
        },
    },
});
export const { setHeadingSize, setParagraphSize } = theme.actions;
export default theme.reducer;
