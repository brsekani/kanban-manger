import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../Ui/UiSlice";
import dataReducer, { initializeBoard } from "../data/DataSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    data: dataReducer,
  },
});

// Dispatch initializeBoard action when the store is created
store.dispatch(initializeBoard());

export default store;
