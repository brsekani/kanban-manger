import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarOpen: true,
  createNewBoardOpen: false,
  createNewTaskOpen: false,
  dropDownSettingOpen: false,
  toggleBackground: false,
};

const UiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openSideBar: (state) => {
      state.isSideBarOpen = true;
    },

    closeSideBar: (state) => {
      state.isSideBarOpen = false;
    },

    openCreateNewBoard: (state) => {
      state.createNewBoardOpen = true;
    },

    closeCreateNewBoard: (state) => {
      state.createNewBoardOpen = false;
    },

    openCreateNewtask: (state) => {
      state.createNewTaskOpen = true;
    },

    closeCreateNewTask: (state) => {
      state.createNewTaskOpen = false;
    },

    OpenDropDownSetting: (state) => {
      state.dropDownSettingOpen = true;
    },

    CloseDropDownSetting: (state) => {
      state.dropDownSettingOpen = false;
    },

    toggleWhiteBackground: (state) => {
      state.toggleBackground = !state.toggleBackground;
    },
  },
});

export const {
  openSideBar,
  closeSideBar,
  openCreateNewBoard,
  closeCreateNewBoard,
  openCreateNewtask,
  closeCreateNewTask,
  OpenDropDownSetting,
  CloseDropDownSetting,
  toggleWhiteBackground,
} = UiSlice.actions;

export default UiSlice.reducer;
