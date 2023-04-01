import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  selectedStatus: string[];
  selectedGender: string[];
}

const initialState: FilterState = {
  selectedStatus: [],
  selectedGender: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedStatus(state, action: PayloadAction<string[]>) {
      state.selectedStatus = action.payload;
    },
    setSelectedGender(state, action: PayloadAction<string[]>) {
      state.selectedGender = action.payload;
    },
    removeSelected(state) {
      state.selectedStatus = [];
      state.selectedGender = [];
    },
  },
});

export const { setSelectedStatus, setSelectedGender, removeSelected } = filterSlice.actions;

export default filterSlice.reducer;
