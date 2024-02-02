// dataSlice.js
import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

const initialState = {
  boards: data.boards,
  currentBoardIndex: 0, // Assume the default current board index
  ClickedTaskName: "",
  ClickedTaskIndex: null,
};

const DataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setCurrectBoard: (state, action) => {
      // Assuming payload is an index
      const index = action.payload - 1;

      // Check if the index is within bounds
      if (index >= 0 && index < state.boards.length) {
        // Update the current board index
        state.currentBoardIndex = index;
      }
    },
    setClickedTaskPreview: (state, action) => {
      state.ClickedTaskName = action.payload.name;
      state.ClickedTaskIndex = action.payload.index;
      console.log(state.ClickedTaskIndex, state.ClickedTaskName);
    },
  },
});

export const { setCurrectBoard, setClickedTaskPreview } = DataSlice.actions;

// export const selectCurrentBoard = (state) => {
//   const currentIndex = state.data.currentBoardIndex;
//   console.log(state);
//   return state.boards[currentIndex];
// };

export default DataSlice.reducer;
