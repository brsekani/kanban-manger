// dataSlice.js
import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

const initialState = {
  boards: data.boards,
  currentBoardIndex: 0, // Assume the default current board index
  ClickedTaskName: "",
  ClickedTaskIndex: 0,
};

const DataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    // SET
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
    },

    // DELETE
    // 1. Delete task
    deleteTask: (state, action) => {
      const { ClickedTaskName, ClickedTaskIndex } = action.payload;

      // Find the index of the column with the specified name
      const columnIndex = state.boards[
        state.currentBoardIndex
      ].columns.findIndex((column) => column.name === ClickedTaskName);

      // If the column is found
      if (columnIndex !== -1) {
        // Create a new array of tasks excluding the one at ClickTaskIndex
        const updatedTasks = state.boards[state.currentBoardIndex].columns[
          columnIndex
        ].tasks.filter((_, i) => i !== ClickedTaskIndex);

        state.boards[state.currentBoardIndex].columns[columnIndex].tasks =
          updatedTasks;
      }
    },
    // 2. Delete Board
    deleteBoard: (state, action) => {
      state.boards = [
        ...state.boards.slice(0, action.payload),
        ...state.boards.slice(action.payload + 1),
      ];

      state.currentBoardIndex =
        state.currentBoardIndex >= state.boards.length
          ? state.boards.length - 1
          : state.currentBoardIndex;
      console.log(state.currentBoardIndex, action.payload);
    },

    // 3. Reset Board
    resetBoard: (state) => {
      const currentBoard = state.boards[state.currentBoardIndex];
      currentBoard.columns = [];
    },

    // CREATE NEW BOARD
    createBoard: (state, action) => {
      const { BoardName, columns } = action.payload.data;

      const updatedBoard = [
        ...state.boards,
        { name: BoardName, columns: columns },
      ];
      state.boards = updatedBoard;

      // setting new board to the currrent board
      state.currentBoardIndex = action.payload.currentBoard;
    },
  },
});

export const {
  setCurrectBoard,
  setClickedTaskPreview,
  deleteTask,
  deleteBoard,
  resetBoard,
  createBoard,
} = DataSlice.actions;

export default DataSlice.reducer;
