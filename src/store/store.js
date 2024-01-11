import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../Ui/UiSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export default store;
