import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarOpen: true,
  createNewBoardOpen: false,
  createNewTaskOpen: false,
  editBoardOpen: false,
  dropDownSettingOpen: false,
  toggleBackground: false,
  TaskPreviewOpen: false,
  DropDownCurrentStatus: false,
  DropDownEditAndDelete: false,
  DeleteTaskOpen: false,
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

    openDropDownCurrentStatus: (state) => {
      state.DropDownCurrentStatus = true;
    },

    closeDropDownCurrentStatus: (state) => {
      state.DropDownCurrentStatus = false;
    },

    toggleDropDownCurrentStatus: (state) => {
      state.DropDownCurrentStatus = !state.DropDownCurrentStatus;
    },

    openDropDownEditAndDelete: (state) => {
      state.DropDownEditAndDelete = true;
    },

    closeDropDownEditAndDelete: (state) => {
      state.DropDownEditAndDelete = false;
    },

    toggleDropDownEditAndDelete: (state) => {
      state.DropDownEditAndDelete = !state.DropDownEditAndDelete;
    },

    openDeleteTask: (state) => {
      state.DeleteTaskOpen = true;
    },

    closeDeleteTask: (state) => {
      state.DeleteTaskOpen = false;
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
  openDropDownCurrentStatus,
  closeDropDownCurrentStatus,
  toggleDropDownCurrentStatus,
  openDropDownEditAndDelete,
  closeDropDownEditAndDelete,
  toggleDropDownEditAndDelete,
  openDeleteTask,
  closeDeleteTask,
} = UiSlice.actions;

export default UiSlice.reducer;
