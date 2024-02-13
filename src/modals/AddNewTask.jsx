import { useEffect, useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCreateNewTask,
  closeDropDownCurrentStatus,
  toggleDropDownCurrentStatus,
} from "../Ui/UiSlice";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";
import { addNewTask } from "../data/DataSlice";

function CreateNewBoard() {
  const [currentStatus, setCurrentStatus] = useState("Select Column");
  const [subTasks, setSubTasks] = useState([""]);
  const myDivRef = useRef(null);

  const dispatch = useDispatch();

  const { toggleBackground, DropDownCurrentStatus } = useSelector(
    (state) => state.ui,
  );

  const handleClickOutside = (event) => {
    if (myDivRef.current && !myDivRef.current.contains(event.target)) {
      dispatch(closeCreateNewTask());
      dispatch(closeDropDownCurrentStatus());
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

  const { boards, currentBoardIndex } = useSelector((state) => state.data);
  const columns = boards[currentBoardIndex].columns.map((column) => column);

  // FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = {
      title: data.title,
      description: data.description,
      subTasks: data.subTasks,
      status: currentStatus.toLocaleLowerCase(),
    };

    console.log(formData);
    dispatch(addNewTask(formData));
    dispatch(closeCreateNewTask());
    dispatch(closeDropDownCurrentStatus());
  };

  return (
    <div
      className={`fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,.486)] `}
    >
      <div
        className={`m-auto w-full max-w-[30rem] rounded-none from-transparent p-0 font-normal`}
        ref={myDivRef}
      >
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className={`lg:w-[calc(100vw - 2em)] absolute left-1/2 top-1/2 flex w-[30vw] -translate-x-1/2 -translate-y-1/2 transform flex-col justify-center gap-1 rounded-md ${
            toggleBackground ? "bg-white" : "bg-[#2b2c37]"
          } w-full max-w-[30rem]  p-6 `}
          // initial={{ y: "-100%", x: "-200px" }}
          // animate={toggleBackground ? { y: "-50%" } : { y: "-50%" }}
          // transition={{ duration: 0.5 }}
        >
          <ImCross
            className="ml-auto  flex md:hidden"
            color="#828FA340"
            onClick={() => {
              dispatch(closeCreateNewTask());
              dispatch(closeDropDownCurrentStatus());
            }}
          />
          <h1
            className={`text-[1.125rem] ${
              toggleBackground ? "text-black " : "text-white"
            }   font-bold leading-6 `}
          >
            Add New Task
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
              {...register("title", { required: "This field is required" })}
              className={`pt-0.7  m-1 mt-1 h-10 w-full rounded border border-[#828FA340] ${
                toggleBackground ? "bg-white" : "bg-[#2b2c37]"
              }  p-4 text-sm font-bold  ${
                toggleBackground ? "text-black" : "text-white"
              } outline-none`}
              placeholder="e.g Web Development"
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
              {...register("description")}
              className={`m-1 mt-1 h-5 max-h-[112px]  min-h-[60px] w-full rounded border  border-[#828FA340] ${
                toggleBackground ? "bg-white" : "resize-none bg-[#2b2c37] "
              }  p-4 pt-[0.7] text-sm font-bold  ${
                toggleBackground ? "text-black" : "text-white"
              } outline-none`}
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
            <div className="scroll-container flex max-h-[5rem] flex-col gap-3">
              {subTasks.map((input, index) => (
                <div
                  className=" flex items-center gap-5 focus:outline-none"
                  key={index}
                >
                  <input
                    {...register(`subTasks[${index}].title`)}
                    className={`pt-0.7 h-10 w-full rounded border border-[#828FA340] ${
                      toggleBackground ? "bg-white" : "bg-[#2b2c37]"
                    } p-4 text-sm font-bold ${
                      toggleBackground ? "text-black" : "text-white"
                    }  outline-none`}
                    placeholder="e.g Todo"
                    value={input}
                    onChange={(e) => handleinputChange(index, e.target.value)}
                  />
                  <ImCross
                    className="cursor-pointer"
                    color="#828FA340"
                    onClick={() => removeInput(index)}
                  />
                </div>
              ))}
            </div>
            <button
              className={`mt-2 h-10 w-full rounded-[20px] ${
                toggleBackground ? "bg-[#625fc721]" : "bg-white"
              }  font-bold text-[#635fc7]`}
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
                Status
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
                      toggleBackground ? "text-black" : "text-[#828fa3]"
                    } `}
                  >
                    {currentStatus}
                  </span>
                  <img src="src\assets\icon-chevron-up.svg" alt="" />
                </button>
              </div>

              {DropDownCurrentStatus && (
                <motion.div
                  className={`scrollbar-hide absolute top-[110%] mt-2 flex   w-full flex-col gap-2 overflow-y-scroll  rounded-lg ${
                    toggleBackground ? "bg-white" : "bg-[#2b2c37] "
                  } scroll-container scroll-container max-h-[6rem] p-4 text-[#828fa3] shadow-md ring ring-blue-500 ring-opacity-10`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {columns.map((column) => (
                    <div
                      className={`cursor-pointer text-[.8125rem] ${
                        toggleBackground
                          ? "hover:font-bold hover:text-black"
                          : "hover:font-bold hover:text-white"
                      }  `}
                      onClick={(e) => {
                        setCurrentStatus(e.target.innerHTML);
                        dispatch(closeDropDownCurrentStatus());
                      }}
                    >
                      {column.name}
                    </div>
                  ))}
                </motion.div>
              )}
              {/* Hidden input for currentStatus */}
              <input
                type="hidden"
                {...register("currentStatus")}
                value={currentStatus}
              />
            </div>

            <button
              type="submit"
              className="h-10 w-full rounded-[20px] bg-[#635fc7] font-bold text-white"
            >
              Create Task
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

export default CreateNewBoard;
