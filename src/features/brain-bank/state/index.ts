import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BrainBankState {
  selectedChapterId: string | null;
  isEditMode: boolean;
}

const initialState: BrainBankState = {
  selectedChapterId: null,
  isEditMode: false,
};

const brainBankSlice = createSlice({
  name: "brain-bank",
  initialState,
  reducers: {
    setSelectedChapterId(state, action: PayloadAction<string | null>) {
      state.selectedChapterId = action.payload;
    },
    toggleEditMode(state) {
      state.isEditMode = !state.isEditMode;
    },
  },
});

export const { setSelectedChapterId, toggleEditMode } = brainBankSlice.actions;
export default brainBankSlice.reducer;
