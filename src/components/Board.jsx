import { IoMdEye } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { openSideBar } from "../Ui/UiSlice";
import { openAddNewColumn } from "../Ui/UiSlice";
import TaskHeader from "../Ui/TaskHeader";
import TaskBody from "../Ui/TaskBody";
import AddNewColumnBtn from "../Ui/AddNewColumnBtn";
import EmptyBoard from "./EmptyBoard";

function Board() {
  const { isSideBarOpen, toggleBackground } = useSelector((state) => state.ui);
  const { boards, currentBoardIndex } = useSelector((state) => state.data);
  console.log(boards[currentBoardIndex].columns.length > 4);

  const dispatch = useDispatch();
  console.log(boards);

  return (
    <div
      className={`flex h-full w-full overflow-x-auto ${
        toggleBackground ? "bg-[#f4f7fd]" : "bg-[#20212c]"
      } no-scrollbar transition-all duration-500 ease-in-out`}
    >
      {!isSideBarOpen && (
        <button className="" onClick={() => dispatch(openSideBar())}>
          <div
            className={`fixed bottom-8 flex h-12 w-14 items-center justify-center rounded-r-3xl bg-[#635FC7]`}
          >
            <IoMdEye color="white" />
          </div>
        </button>
      )}

      <div className="h-full ">
        {/* BUG */}
        <div className=" flex  h-full gap-8  px-8 py-6">
          {/* Columns */}
          {boards.length > 0 ? (
            boards[currentBoardIndex]?.columns?.map((column, i) => (
              <div className="" key={i}>
                <TaskHeader column={column} />
                <TaskBody column={column} />
              </div>
            ))
          ) : (
            <div className="">
              <EmptyBoard />
            </div>
          )}

          {boards.length === 0 ||
            boards[currentBoardIndex].columns.length === 5 || (
              <button
                className="bg-linear-gradient-to-b mt-12 flex h-full w-[280px] items-center justify-center rounded-md font-bold"
                onClick={() => dispatch(openAddNewColumn())}
              >
                <AddNewColumnBtn />
              </button>
            )}
        </div>
      </div>
    </div>
  );
}

export default Board;

// <div className=" flex  h-full gap-8 px-8 py-6 ">
// {/* Columns */}
// {boards.length > 0 ? (
//   boards[currentBoardIndex].columns.map((column, i) => (
//     <div className="" key={i}>
//       <TaskHeader column={column} />
//       <TaskBody column={column} />
//     </div>
//   ))
// ) : (
//   <EmptyBoard />
// )}

// {boards.length > 0 && (
//   <button
//     className="bg-linear-gradient-to-b mt-12 flex h-full w-[280px] items-center justify-center rounded-md font-bold"
//     onClick={() => dispatch(openAddNewColumn())}
//   >
//     <AddNewColumnBtn />
//   </button>
// )}
// </div>
