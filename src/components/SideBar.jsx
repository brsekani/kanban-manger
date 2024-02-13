import { FaRegEyeSlash } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSideBar,
  openCreateNewBoard,
  toggleWhiteBackground,
} from "../Ui/UiSlice";
import BoardHeaders from "./BoardHeaders";

function SideBar() {
  const { toggleBackground } = useSelector((state) => state.ui);
  const { boards } = useSelector((state) => state.data);
  const numberOfBoards = boards.length;

  const dispatch = useDispatch();

  return (
    <div
      className={`relative flex max-h-full min-h-full min-w-72 flex-col border-r  ${
        toggleBackground ? "border-[#e4ebfa]" : "border-[#3E3F4E]"
      } hidden font-bold transition-all duration-500 ease-in-out md:flex`}
    >
      <div className="flex min-h-screen flex-col justify-between pb-20">
        <div className="">
          <h3 className="my-4 ml-8 text-sm font-bold uppercase tracking-[2.4px] text-[#828fa3]">
            All Board<span> ({numberOfBoards})</span>
          </h3>

          <BoardHeaders />

          <div className="mt-6">
            <button
              className="ml-8 flex flex-row items-center gap-4 text-[#635FC5] hover:opacity-60"
              onClick={() => dispatch(openCreateNewBoard())}
            >
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                  fill="#635FC5"
                ></path>
              </svg>
              <p>+ Create New Board</p>
            </button>
          </div>
        </div>

        <footer className=" text-white ">
          <div
            className={`ml-6 flex h-12 w-[235px] items-center justify-center rounded-md ${
              toggleBackground ? " bg-[#F4F7FD]" : "bg-[#20212c]"
            }`}
          >
            {/* <div className={`ml-6 flex h-12 w-[235px] items-center justify-center rounded-md bg-[#20212C]`}> */}
            <BsFillMoonStarsFill
              color="#828FA3"
              className="cursor-pointer"
              onClick={() => dispatch(toggleWhiteBackground())}
            />
            <button
              className="relative mx-[26px] flex h-5 w-10 items-center rounded-xl bg-[#635FC7]"
              onClick={() => dispatch(toggleWhiteBackground())}
            >
              <span
                className={`absolute h-[14px] w-[14px] rounded-3xl bg-white transition-all duration-500 ${
                  toggleBackground ? "left-[55%]" : "left-[10%]"
                }`}
              ></span>
            </button>

            <IoIosSunny
              color="#828FA3"
              className="cursor-pointer"
              onClick={() => dispatch(toggleWhiteBackground())}
            />
          </div>

          <div
            className="ml-8 flex cursor-pointer items-center text-[.9375rem]  text-[#828fa3]"
            onClick={() => dispatch(closeSideBar())}
          >
            <FaRegEyeSlash color="#828FA3" className="my-7 mr-4" />
            <p>Hide Sidebar</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SideBar;
