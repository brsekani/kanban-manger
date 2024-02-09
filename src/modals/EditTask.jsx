import { useEffect, useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDropDownCurrentStatus,
  closeEditTask,
  toggleDropDownCurrentStatus,
} from "../Ui/UiSlice";
import { motion } from "framer-motion";

function EditTask() {
  const myDivRef = useRef(null);

  const dispatch = useDispatch();

  const { toggleBackground, DropDownCurrentStatus } = useSelector(
    (state) => state.ui,
  );

  const handleClickOutside = (event) => {
    if (myDivRef.current && !myDivRef.current.contains(event.target)) {
      dispatch(closeEditTask());
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  //Add SubTask
  const addInput = (e) => {
    e.preventDefault();
    setSubTasks([...subTasks, ""]);
  };

  // Remove SubTask
  const removeInput = (index) => {
    const newSubTask = [...subTasks];
    newSubTask.splice(index, 1);
    setSubTasks(newSubTask);
  };

  // Handlde SubTask
  const handleinputChange = (index, value) => {
    const newSubTasks = [...subTasks];
    newSubTasks[index] = value;
    setSubTasks(newSubTasks);
  };

  // Data
  const { boards, currentBoardIndex, ClickedTaskName, ClickedTaskIndex } =
    useSelector((state) => state.data);

  const task = boards[currentBoardIndex].columns
    .filter((column) => column.name === ClickedTaskName)
    .at(0)
    .tasks.at(ClickedTaskIndex);
  console.log(task);

  const status = boards[currentBoardIndex].columns.map((column) => column);
  console.log(status.map((status) => status.name).at(1));

  const [subTasks, setSubTasks] = useState(task.subtasks);
  const [currentStatus, setCurrentStatus] = useState(ClickedTaskName);
  console.log(subTasks);

  return (
    <div
      className={`fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,.486)] `}
    >
      <div
        className={`m-auto w-full max-w-[30rem] rounded-none from-transparent p-0 font-normal`}
        ref={myDivRef}
      >
        <motion.form
          className={`lg:w-[calc(100vw -2em)] absolute left-1/2 top-1/2 flex w-[30vw] -translate-x-1/2 -translate-y-1/2 transform flex-col justify-center  rounded-md ${
            toggleBackground ? "bg-white" : "bg-[#2b2c37]"
          }  scroll-container max-h-[32rem] w-full max-w-[30rem] overflow-auto p-6 pt-32 `}
          // initial={{ y: "-100%", x: "-200px" }}
          // animate={toggleBackground ? { y: "-50%" } : { y: "-50%" }}
          // transition={{ duration: 0.5 }}
        >
          <div>
            <ImCross
              className="ml-auto flex md:hidden "
              color="#828FA340"
              onClick={() => {
                dispatch(closeEditTask());
              }}
            />
          </div>
          <h1
            className={`text-[1.125rem] ${
              toggleBackground ? "text-black " : "text-white"
            }   md:md-0 mb-3 font-bold leading-6`}
          >
            Edit Task
          </h1>

          <div className="">
            <label
              className={`text-xs font-bold  ${
                toggleBackground ? "text-[#828fa3] " : "text-white"
              } `}
            >
              Title
            </label>
            <input
              className={`pt-0.7  m-1 mt-1 h-10 w-full rounded border border-[#828FA340] ${
                toggleBackground ? "bg-white" : "bg-[#2b2c37]"
              }  p-4 text-sm font-bold text-white outline-none`}
              placeholder="e.g Web Development"
              defaultValue={task.title}
            />
          </div>

          <div>
            <label
              className={`text-xs font-bold  ${
                toggleBackground ? "text-[#828fa3] " : "text-white"
              } `}
            >
              Description (optional)
            </label>
            <textarea
              className={`m-1 mt-1 h-5 max-h-[112px]  min-h-[80px] w-full resize-none rounded  border border-[#828FA340] ${
                toggleBackground ? "bg-white" : "bg-[#2b2c37]"
              }  scroll-container p-2 pt-[0.7] text-sm font-bold text-white outline-none`}
              defaultValue={task.description}
            />
          </div>

          <div className="mb-1 flex flex-col">
            <div className="mb-1">
              <label
                className={`text-xs font-bold  ${
                  toggleBackground ? "text-[#828fa3] " : "text-white"
                } `}
              >
                Subtasks
              </label>
            </div>

            <div className="scroll-container flex  max-h-28 flex-col gap-3 overflow-y-auto">
              {subTasks.length > 0 ? (
                subTasks.map((input, index) => (
                  <div
                    className="flex items-center gap-5 focus:outline-none"
                    key={index}
                  >
                    <input
                      className={`pt-0.7 h-10 w-full rounded border border-[#828FA340] ${
                        toggleBackground ? "bg-white" : "bg-[#2b2c37]"
                      }  m-[2px] p-4 text-sm font-bold text-white outline-none focus:ring-2 focus:ring-[#635fc7]`}
                      placeholder="e.g Todo"
                      value={input.title}
                      onChange={(e) => handleinputChange(index, e.target.value)}
                    />
                    <ImCross
                      className="mr-2 cursor-pointer"
                      color="#828FA340"
                      onClick={() => removeInput(index)}
                    />
                  </div>
                ))
              ) : (
                <p className="mt-2 text-center font-bold text-red-500">
                  No subtask, Add one by cliking on the button
                </p>
              )}
            </div>
            <button
              className={`h-10 w-full rounded-[20px] ${
                toggleBackground ? "bg-[#625fc721]" : "bg-white"
              }   mt-5 font-bold text-[#635fc7]`}
              onClick={addInput}
            >
              +Add New Column
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
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
                    {status.map((status) => (
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
                        {status.name}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
            <button className="h-10 w-full rounded-[20px] bg-[#635fc7] font-bold text-white">
              Save Changes
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

export default EditTask;
