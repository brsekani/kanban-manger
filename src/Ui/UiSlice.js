import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarOpen: true,
  createNewBoardOpen: false,
  createNewTaskOpen: false,
  editBoardOpen: false,
  dropDownSettingOpen: false,
  toggleBackground: false,
  TaskPreviewOpen: false,
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

    openEditBoard: (state) => {
      state.editBoardOpen = true;
    },

    closeEditBoard: (state) => {
      state.editBoardOpen = false;
    },

    openTaskPreview: (state) => {
      state.TaskPreviewOpen = true;
    },

    closeTaskPreview: (state) => {
      state.TaskPreviewOpen = false;
    },

    OpenDropDownSetting: (state) => {
      state.dropDownSettingOpen = true;
    },

    CloseDropDownSetting: (state) => {
      state.dropDownSettingOpen = false;
    },

    toggleDropDownSetting: (state) => {
      state.dropDownSettingOpen = !state.dropDownSettingOpen;
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
  openEditBoard,
  closeEditBoard,
  openTaskPreview,
  closeTaskPreview,
  OpenDropDownSetting,
  CloseDropDownSetting,
  toggleWhiteBackground,
  toggleDropDownSetting,
} = UiSlice.actions;

export default UiSlice.reducer;
