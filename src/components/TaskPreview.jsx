import { useEffect, useRef, useState } from "react";
// import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import {
  closeTaskPreview,
  toggleDropDownCurrentStatus,
  closeDropDownCurrentStatus,
  toggleDropDownEditAndDelete,
  closeDropDownEditAndDelete,
  openDeleteTask,
  openEditTask,
} from "../Ui/UiSlice";
import { motion } from "framer-motion";

function TaskPreview() {
  const [inputs, setInputs] = useState([""]);

  const myDivRef = useRef(null);

  const dispatch = useDispatch();

  const { toggleBackground, DropDownCurrentStatus, DropDownEditAndDelete } =
    useSelector((state) => state.ui);

  const handleClickOutside = (event) => {
    if (myDivRef.current && !myDivRef.current.contains(event.target)) {
      dispatch(closeTaskPreview());
      dispatch(closeDropDownEditAndDelete());
      dispatch(closeDropDownCurrentStatus());
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  //Add input
  const addInput = (e) => {
    e.preventDefault();
    setInputs([...inputs, ""]);
  };

  // Remove input
  const removeInput = (index) => {
    const newInput = [...inputs];
    newInput.splice(index, 1);
    setInputs(newInput);
  };

  const handleinputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  // stating current status
  const [currentStatus, setCurrentStatus] = useState("");

  return (
    <div
      className={`absolute left-0 top-0 z-[9999] flex h-full w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,.486)]  `}
    >
      <div
        className={` m-0 rounded-none from-transparent p-0 font-normal`}
        ref={myDivRef}
      >
        <motion.form
          className={`lg:w-[calc(100vw -2em)] absolute left-1/2 top-1/2 flex w-[30vw] -translate-x-1/2 -translate-y-1/2 transform flex-col justify-center gap-6 rounded-md ${
            toggleBackground ? "bg-white" : "bg-[#2b2c37]"
          }   p-6 md:w-[480px] `}
          initial={{ y: "-100%", x: "-200px" }}
          animate={toggleBackground ? { y: "-50%" } : { y: "-50%" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between gap-1">
            <div className="w-full overflow-hidden">
              <h1
                className={`text-[1.125rem] ${
                  toggleBackground ? "text-black " : "text-white"
                }  w-full  font-bold leading-6`}
              >
                Review early feedback and plan next steps for roadmap
              </h1>
            </div>
            <div>
              <div onClick={() => dispatch(toggleDropDownEditAndDelete())}>
                <img
                  className="cursor-pointer"
                  src="src\assets\icon-vertical-ellipsis.svg"
                />
              </div>
              {DropDownEditAndDelete && (
                <div
                  className={`absolute right-1 top-[70px] flex w-[12rem] flex-col items-start gap-1 rounded-lg  border  ${
                    toggleBackground
                      ? "bg-white"
                      : "border-[#20212C] bg-[#20212C]"
                  }  p-4 `}
                >
                  <button
                    className="  text-[#828fa3] hover:text-[#5e6774] "
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(openEditTask());
                      dispatch(closeTaskPreview());
                      dispatch(closeDropDownEditAndDelete());
                      dispatch(closeDropDownCurrentStatus());
                    }}
                  >
                    Edit task
                  </button>
                  <button
                    className="text-red-500 hover:text-red-900"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(openDeleteTask());
                      dispatch(closeTaskPreview());
                      dispatch(closeDropDownEditAndDelete());
                      dispatch(closeDropDownCurrentStatus());
                    }}
                  >
                    Delete task
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="">
            <p className="text-[.8125rem] text-[#828fa3]">
              Beyond the initial launch, we're keeping the initial roadmap
              completely empty. This meeting will help us plan out our next
              steps based on actual customer feedback.
            </p>
          </div>

          <div>
            <h2
              className={`text-[.75rem] font-bold ${
                toggleBackground ? "text-[#828fa3]" : "text-white"
              } `}
            >
              Subtasks(2 of 3)
            </h2>
            <label
              className={`mt-3 flex h-9 items-center gap-3 rounded-md  ${
                toggleBackground ? "bg-[#F4F7FD] " : "bg-[#20212C]"
              } pl-3 transition duration-300 ease-in-out hover:bg-purple-500 hover:bg-opacity-25`}
            >
              <input className="h-4 min-w-4" type="checkbox" />

              <span
                className={`text-[.75rem] font-bold ${
                  toggleBackground ? "text-[#828fa3]" : "text-white"
                }`}
              >
                interview 10 people
              </span>
            </label>
          </div>

          <div className="relative flex w-full flex-col gap-0.5">
            <label
              className={`mb-2 text-[.75rem] font-bold ${
                toggleBackground ? "text-[#828fa3]" : "text-white"
              }`}
            >
              Current Status
            </label>
            <div>
              <button
                className="flex h-9 w-full cursor-pointer items-center justify-between rounded-md border-[0.1px] border-solid border-[rgba-130-143-163-40] bg-transparent px-4 outline-none"
                onClick={(e) => {
                  e.preventDefault(); // Prevent the event from reaching the document
                  dispatch(toggleDropDownCurrentStatus());
                }}
              >
                <span
                  className={`text-[.8125rem] ${
                    toggleBackground ? "text-[#828fa3]" : "text-white"
                  } `}
                >
                  {currentStatus}
                </span>
                {DropDownCurrentStatus ? (
                  <img src="src\assets\icon-chevron-up.svg" alt="" />
                ) : (
                  <img src="src\assets\icon-chevron-down.svg" alt="" />
                )}
              </button>
              {DropDownCurrentStatus && (
                <motion.div
                  className={`md:max-h-1/4 lg:max-h-1/5 xl:max-h-1/6 scrollbar-hide absolute top-[100%] mt-2  flex h-[15vh] max-h-[200px] w-full flex-col gap-2 overflow-y-scroll  rounded-lg ${
                    toggleBackground ? "bg-white" : "bg-[#2b2c37]"
                  } p-4 text-[#828fa3] shadow-md`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div
                    className={`cursor-pointer text-[.8125rem] ${
                      toggleBackground
                        ? "hover:font-bold hover:text-black"
                        : "hover:font-bold hover:text-white"
                    } hover:font-bold hover:text-white`}
                    onClick={(e) => {
                      setCurrentStatus(e.target.innerHTML);
                      dispatch(closeDropDownCurrentStatus());
                    }}
                  >
                    a
                  </div>

                  <div
                    className={`cursor-pointer text-[.8125rem] ${
                      toggleBackground
                        ? "hover:font-bold hover:text-black"
                        : "hover:font-bold hover:text-white"
                    } hover:font-bold hover:text-white`}
                    onClick={(e) => {
                      setCurrentStatus(e.target.innerHTML);
                      dispatch(closeDropDownCurrentStatus());
                    }}
                  >
                    a
                  </div>

                  <div
                    className={`cursor-pointer text-[.8125rem] ${
                      toggleBackground
                        ? "hover:font-bold hover:text-black"
                        : "hover:font-bold hover:text-white"
                    } hover:font-bold hover:text-white`}
                    onClick={(e) => {
                      setCurrentStatus(e.target.innerHTML);
                      dispatch(closeDropDownCurrentStatus());
                    }}
                  >
                    a
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

export default TaskPreview;
