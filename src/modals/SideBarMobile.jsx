import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeResetBoard,
  closeSideBarMobile,
  openCreateNewBoard,
  toggleWhiteBackground,
} from "../Ui/UiSlice";
import { motion } from "framer-motion";
import { IoIosSunny } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { setCurrentBoard } from "../data/DataSlice";

function SideBarMobile() {
  const [selectedHeader, setSelectedHeader] = useState(0);
  const myDivRef = useRef(null);

  const dispatch = useDispatch();

  const { toggleBackground } = useSelector((state) => state.ui);

  const { boards, currentBoardIndex, ClickedTaskName, ClickedTaskIndex } =
    useSelector((state) => state.data);

  const handleClickOutside = (event) => {
    if (myDivRef.current && !myDivRef.current.contains(event.target)) {
      dispatch(closeSideBarMobile());
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  useEffect(() => {
    setSelectedHeader(currentBoardIndex);
  }, [currentBoardIndex, boards]);

  function handleCurrentBoard(id) {
    setSelectedHeader(id - 1);
    dispatch(setCurrentBoard(id));
  }

  const numberOfBoards = boards.length;

  return (
    <div
      className={`absolute left-0 top-0 z-[9999] flex h-full w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,.486)]  `}
    >
      <motion.div
        className={`max-w-[30rem] gap-6 rounded-lg ${
          toggleBackground ? "bg-white" : "bg-[#2B2C37]"
        } `}
        ref={myDivRef}
        // initial={{ y: "-100%", x: "-200px" }}
        // animate={toggleBackground ? { y: "-50%" } : { y: "-50%" }}
        // transition={{ duration: 0.5 }}
      >
        <div className="flex min-h-[2.8rem] w-[17.25rem] flex-col">
          <h3 className="my-4 ml-8 text-sm font-bold uppercase tracking-[2.4px] text-[#828fa3]">
            All Board<span> ({numberOfBoards})</span>
          </h3>
          <div className="scroll-container flex max-h-72  flex-col gap-1 overflow-y-auto">
            {boards.map((item, index) => (
              <button
                key={index + 1}
                className={`mr-16 flex flex-row items-center gap-4 rounded-r-full pl-8 text-[#828fa3] ${
                  selectedHeader === index ? "selectedHeader" : ""
                } ${
                  selectedHeader !== index && toggleBackground
                    ? "hover:bg-[#e7e7e7]"
                    : selectedHeader !== index
                      ? "hover:bg-white"
                      : ""
                } transition-all duration-500`}
                onClick={() => {
                  handleCurrentBoard(index + 1);
                  dispatch(closeSideBarMobile());
                }}
              >
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                      fill={` ${
                        selectedHeader === index ? "white" : "#828fa3"
                      }`}
                    ></path>
                  </svg>
                </svg>
                <p
                  className={`mb-3 mt-3 max-w-48 overflow-hidden text-ellipsis text-nowrap ${
                    selectedHeader === index ? "text-white" : ""
                  }`}
                >
                  {item.name}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-2">
            <button
              className="ml-8 flex flex-row items-center gap-4 text-[#635FC5] hover:opacity-60"
              onClick={() =>
                dispatch(openCreateNewBoard(), dispatch(closeSideBarMobile()))
              }
            >
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                  fill="#635FC5"
                ></path>
              </svg>
              <p className="font-bold">+ Create New Board</p>
            </button>
          </div>

          <footer className="mb-7 mt-4  text-white">
            <div
              className={`ml-6 flex h-12 w-[235px] items-center justify-center rounded-md ${
                toggleBackground ? " bg-[#F4F7FD" : "bg-[#20212c]"
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
          </footer>
        </div>
      </motion.div>
    </div>
  );
}

export default SideBarMobile;
