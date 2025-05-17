// src/features/font/fontSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  headingSize: string;
  paragraphSize: string;
}

const initialState: ThemeState = {
  headingSize: "text-2xl",
  paragraphSize: "text-base",
};

const theme = createSlice({
  name: "font",
  initialState,
  reducers: {
    setHeadingSize: (state, action: PayloadAction<string>) => {
      state.headingSize = action.payload;
    },
    setParagraphSize: (state, action: PayloadAction<string>) => {
      state.paragraphSize = action.payload;
    },
  },
});

export const { setHeadingSize, setParagraphSize } = theme.actions;
export default theme.reducer;
