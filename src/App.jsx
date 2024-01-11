import { useState } from "react";
import Board from "./components/Board";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import CreateNewBoard from "./components/CreateNewBoard";
import AddNewTask from "./components/AddNewTask";
import { useSelector } from "react-redux";

function App() {
  const { createNewBoardOpen, createNewTaskOpen } = useSelector(
    (state) => state.ui,
  );

  return (
    <div className="h-[100vh] overflow-hidden ">
      <Nav />
      <Body />
      {createNewBoardOpen && <CreateNewBoard />}
      {createNewTaskOpen && <AddNewTask />}
    </div>
  );
}

export default App;
