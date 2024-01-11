import { useSelector } from "react-redux";
import Board from "./Board";
import SideBar from "./SideBar";

function Body() {
  const { isSideBarOpen, toggleBackground } = useSelector((state) => state.ui);

  return (
    <div
      className={`flex h-full w-full  ${
        toggleBackground ? "" : "bg-[#2b2c37]"
      } transition-all duration-500 ease-in-out`}
    >
      {isSideBarOpen && <SideBar />}
      <Board />
    </div>
  );
}

export default Body;
