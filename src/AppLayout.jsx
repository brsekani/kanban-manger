import { useSelector } from "react-redux";
import Board from "./components/Board/Board";
import SideBar from "./components/SideBar/SideBar";

function AppLayout() {
  // const { isSideBarOpen, toggleBackground } = useSelector((state) => state.ui);

  return (
    <div
      className={`flex h-full w-full transition-all duration-500 ease-in-out`}
    >
      <SideBar />
      <Board />
    </div>
  );
}

export default AppLayout;
