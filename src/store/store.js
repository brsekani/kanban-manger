import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../Ui/UiSlice";
import dataReducer from "../data/DataSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    data: dataReducer,
  },
});

export default store;
