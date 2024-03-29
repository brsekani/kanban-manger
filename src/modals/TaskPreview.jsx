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
import { color, motion } from "framer-motion";

import iconVerticalEllipsis from "../../src/assets/icon-vertical-ellipsis.svg";
import { updateSubTasks, updateTaskStatus } from "../data/DataSlice";

function TaskPreview() {
  const myDivRef = useRef(null);

  const dispatch = useDispatch();

  const { toggleBackground, DropDownCurrentStatus, DropDownEditAndDelete } =
    useSelector((state) => state.ui);

  const { boards, currentBoardIndex, ClickedTaskName, ClickedTaskIndex } =
    useSelector((state) => state.data);

  const task = boards[currentBoardIndex].columns
    .filter((column) => column.name === ClickedTaskName)
    .at(0)
    .tasks.at(ClickedTaskIndex);

  const status = boards[currentBoardIndex].columns.map((column) => column);

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

  // stating current status
  const [currentStatus, setCurrentStatus] = useState(ClickedTaskName);

  const handleCheckboxChange = (i, checked) => {
    const updatedSubtasks = task.subtasks.map((subtaskItem, subtaskIndex) => {
      if (subtaskIndex === i) {
        return {
          ...subtaskItem,
          isCompleted: subtaskItem.isCompleted ? false : true,
        };
      }
      return subtaskItem;
    });
    const updatedTask = { ...task, subtasks: updatedSubtasks };

    dispatch(updateSubTasks(updatedTask.subtasks));
    // Update the task in the state or dispatch an action to update it in Redux
  };

  const clickedTask = boards[currentBoardIndex].columns.find(
    (column) => column.name === ClickedTaskName,
  ).tasks[ClickedTaskIndex];

  // Handle status
  function handleStatus(e) {
    setCurrentStatus(e.target.innerHTML);
    dispatch(closeDropDownCurrentStatus());
    dispatch(updateTaskStatus({ task, statusToMoveTo: e.target.innerHTML }));
    dispatch(closeTaskPreview());
    dispatch(closeDropDownEditAndDelete());
    dispatch(closeDropDownCurrentStatus());
  }

  // checked subtask num and Allsubtask num
  const checkedSubtasks = task?.subtasks?.filter(
    (sub) => sub.isCompleted === true,
  ).length;

  const AllSubtask = task?.subtasks?.length;

  return (
    <div
      className={`fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,.486)] `}
    >
      <div
        className={`m-auto w-full max-w-[30rem] rounded-none from-transparent p-0 font-normal`}
        ref={myDivRef}
      >
        <motion.form
          className={`lg:w-[calc(100vw -2em)] absolute left-1/2 top-1/2 flex w-[30vw] -translate-x-1/2 -translate-y-1/2 transform flex-col justify-center gap-5 rounded-md ${
            toggleBackground ? "bg-white" : "bg-[#2b2c37]"
          }  w-full max-w-[30rem] p-6`}
          // initial={{ y: "-100%", x: "-200px" }}
          // animate={toggleBackground ? { y: "-50%" } : { y: "-50%" }}
          // transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between gap-1">
            <div className="w-full overflow-hidden">
              <h1
                className={`text-[1.125rem] ${
                  toggleBackground ? "text-black " : "text-white"
                }  w-full  font-bold leading-6`}
              >
                {task?.title}
              </h1>
            </div>
            <div>
              <div onClick={() => dispatch(toggleDropDownEditAndDelete())}>
                <img className="cursor-pointer " src={iconVerticalEllipsis} />
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
              {task?.description === "" ? "No description" : task?.description}
            </p>
          </div>

          <div>
            <h2
              className={`text-[.75rem] font-bold ${
                toggleBackground ? "text-[#828fa3]" : "text-white"
              } `}
            >
              Subtasks(<span>{checkedSubtasks}</span> of
              <span> {AllSubtask}</span> )
            </h2>

            {task?.subtasks === "" ? (
              <p className="mt-1 text-[.8125rem] text-[#828fa3]">
                No subtasks.
              </p>
            ) : (
              task?.subtasks?.map?.((subtask, i) => (
                <label
                  key={i}
                  className={`mt-3 flex h-9 items-center gap-3 rounded-md  ${
                    toggleBackground ? "bg-[#F4F7FD] " : "bg-[#20212C]"
                  } scroll-container pl-3 transition duration-300 ease-in-out hover:bg-purple-500 hover:bg-opacity-25`}
                >
                  <input
                    className="h-4 min-w-4"
                    type="checkbox"
                    checked={subtask.isCompleted}
                    onChange={(e) => {
                      handleCheckboxChange(i, e.target.checked);
                    }}
                  />

                  <span
                    className={`text-[.75rem] font-bold ${
                      toggleBackground ? "text-[#828fa3]" : "text-white"
                    }`}
                  >
                    {subtask.title}
                  </span>
                </label>
              ))
            )}
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
                  className={`md:max-h-1/4 lg:max-h-1/5 xl:max-h-1/6 scroll-container absolute top-[100%] mt-2  flex h-[15vh] max-h-[200px] w-full flex-col gap-2 overflow-y-scroll  rounded-lg ${
                    toggleBackground ? "bg-white" : "bg-[#2b2c37]"
                  } p-4 text-[#828fa3] shadow-md`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {status.map((status, i) => (
                    <div
                      key={i}
                      className={`cursor-pointer text-[.8125rem] ${
                        toggleBackground
                          ? "hover:font-bold hover:text-black"
                          : "hover:font-bold hover:text-white"
                      }`}
                      onClick={(e) => handleStatus(e)}
                    >
                      {status.name}
                    </div>
                  ))}
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
