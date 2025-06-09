// src/features/font/fontSlice.ts
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isMenuOpen: false,
};
const appEvent = createSlice({
    name: "font",
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});
export const { toggleMenu } = appEvent.actions;
export default appEvent.reducer;
