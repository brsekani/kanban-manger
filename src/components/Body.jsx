import Board from "./Board";
import SideBar from "./SideBar";

function Body({ HandleSideBar, showSideBar }) {
  return (
    // <div className="flex w-full bg-[#20212c]">
    <div className="w-fullbg-[#20212c] flex h-full ">
      {showSideBar && <SideBar HandleSideBar={HandleSideBar} />}
      <Board showSideBar={showSideBar} HandleSideBar={HandleSideBar} />
    </div>
  );
}

export default Body;
