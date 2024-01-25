import { useState } from "react";
import Board from "./components/Board";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import CreateNewBoard from "./components/CreateNewBoard";
import AddNewTask from "./components/AddNewTask";
import EditBoard from "./components/EditBoard";
import { useSelector } from "react-redux";
import TaskPreview from "./components/TaskPreview";
import DeleteTask from "./components/DeleteTask";
import EditTask from "./components/EditTask";
import DeleteBoard from "./components/DeleteBoard";
import ClearBoard from "./components/clearBoard";
import ResetBoard from "./components/ResetBoard";
import AddNewColumn from "./components/AddNewColumn";

function App() {
  const {
    createNewBoardOpen,
    createNewTaskOpen,
    editBoardOpen,
    TaskPreviewOpen,
    DeleteTaskOpen,
    editTaskOpen,
    DeleteBoardOpen,
    ClearBoardOpen,
    ResetBoardOpen,
    addNewColumnOpen,
  } = useSelector((state) => state.ui);

  return (
    <div className="h-[100vh] overflow-hidden ">
      <Nav />
      <Body />
      {createNewBoardOpen && <CreateNewBoard />}
      {createNewTaskOpen && <AddNewTask />}
      {editBoardOpen && <EditBoard />}
      {TaskPreviewOpen && <TaskPreview />}
      {DeleteTaskOpen && <DeleteTask />}
      {editTaskOpen && <EditTask />}
      {DeleteBoardOpen && <DeleteBoard />}
      {ClearBoardOpen && <ClearBoard />}
      {ResetBoardOpen && <ResetBoard />}
      {addNewColumnOpen && <AddNewColumn />}
    </div>
  );
}

export default App;
