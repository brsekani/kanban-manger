import { useSelector } from "react-redux";
import Board from "./components/Board";
import SideBar from "./components/SideBar";
import EmptyBoard from "./components/EmptyBoard";
import { DragDropContext } from 'react-beautiful-dnd';

function AppLayout() {
  const { isSideBarOpen, toggleBackground } = useSelector((state) => state.ui);
  const { boards } = useSelector((state) => state.data);

  return (
    <div
      className={`relative flex h-full w-full ${
        toggleBackground ? "" : "bg-[#2b2c37]"
      } overflow-auto transition-all duration-500 ease-in-out`}
    >
      {isSideBarOpen && <SideBar />}
      <DragDropContext>{boards.length > 0 ? <Board /> : <EmptyBoard />}</DragDropContext>
    </div>
  );
}

export default AppLayout;
