import { useSelector } from "react-redux";

import Board from "./components/Board";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Body from "./AppLayout";
import CreateNewBoard from "./modals/CreateNewBoard";
import AddNewTask from "./modals/AddNewTask";
import EditBoard from "./modals/EditBoard";
import TaskPreview from "./modals/TaskPreview";
import DeleteTask from "./modals/DeleteTask";
import EditTask from "./modals/EditTask";
import DeleteBoard from "./modals/DeleteBoard";
import ClearBoard from "./modals/ClearBoard";
import ResetBoard from "./modals/ResetBoard";
import AddNewColumn from "./modals/AddNewColumn";

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
