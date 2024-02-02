import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../Ui/UiSlice";
import dataReducer from "../data/dataSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    data: dataReducer,
  },
});

export default store;
