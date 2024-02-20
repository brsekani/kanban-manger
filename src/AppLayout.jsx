import { useSelector } from "react-redux";
import Board from "./components/Board";
import SideBar from "./components/SideBar";
import EmptyBoard from "./components/EmptyBoard";

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
      {boards.length > 0 ? <Board /> : <EmptyBoard />}
    </div>
  );
}

export default AppLayout;
