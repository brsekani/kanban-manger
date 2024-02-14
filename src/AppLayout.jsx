import { useSelector } from "react-redux";
import Board from "./components/Board";
import SideBar from "./components/SideBar";

function AppLayout() {
  const { isSideBarOpen, toggleBackground } = useSelector((state) => state.ui);

  return (
    <div
      className={`relative flex h-full w-full ${
        toggleBackground ? "" : "bg-[#2b2c37]"
      } overflow-auto transition-all duration-500 ease-in-out`}
    >
      {isSideBarOpen && <SideBar />}
      <Board />
    </div>
  );
}

export default AppLayout;
