import { createSlice } from "@reduxjs/toolkit";
import data from "./assets/data.json";
const initialState = data;

const BoardsSlice = createSlice({
  name: "Boards",
  initialState,
  reducers: {},
});

export default BoardsSlice.reducer;
