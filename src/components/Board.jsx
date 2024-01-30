import { IoMdEye } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { openSideBar } from "../Ui/UiSlice";
import { openAddNewColumn } from "../Ui/UiSlice";
import TaskHeader from "./TaskHeader";
import TaskBody from "./TaskBody";
import AddNewColumnBtn from "./AddNewColumnBtn";
import data from "../assets/data.json";

function Board() {
  const { isSideBarOpen, toggleBackground } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

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
        <div className=" flex h-full gap-8 px-8 py-6 ">
          {/* {console.log(column)} */}
          <div className="">
            <TaskHeader />
            <TaskBody />
          </div>

          <div className="">
            <TaskHeader />
            <TaskBody />
          </div>

          <div className="">
            <TaskHeader />
            <TaskBody />
          </div>

          <button
            className="bg-linear-gradient-to-b mt-12 flex h-full w-[280px] items-center justify-center rounded-md font-bold"
            onClick={() => dispatch(openAddNewColumn())}
          >
            <AddNewColumnBtn />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Board;
