import { useEffect, useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { closeEditTask } from "../Ui/UiSlice";
import { motion } from "framer-motion";

function EditTask() {
  const [subTasks, setSubTasks] = useState([""]);
  const myDivRef = useRef(null);

  const dispatch = useDispatch();

  const { toggleBackground } = useSelector((state) => state.ui);

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
          <h1
            className={`text-[1.125rem] ${
              toggleBackground ? "text-black " : "text-white"
            }   font-bold leading-6 `}
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
              className={`m-1 mt-1 h-5 max-h-[112px]  min-h-[60px] w-full rounded border  border-[#828FA340] ${
                toggleBackground ? "bg-white" : "bg-[#2b2c37]"
              }  p-4 pt-[0.7] text-sm font-bold text-white outline-none`}
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
            <div className="flex flex-col gap-3">
              {subTasks.map((input, index) => (
                <div
                  className="flex items-center gap-5 focus:outline-none"
                  key={index}
                >
                  <input
                    className={`pt-0.7 h-10 w-full rounded border border-[#828FA340] ${
                      toggleBackground ? "bg-white" : "bg-[#2b2c37]"
                    } p-4 text-sm font-bold text-white outline-none`}
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
              <button
                className={`h-10 w-full rounded-[20px] ${
                  toggleBackground ? "bg-[#625fc721]" : "bg-white"
                }  font-bold text-[#635fc7]`}
                onClick={addInput}
              >
                +Add New Column
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex w-full flex-col items-start gap-1 focus:outline-none ">
              <label className="text-xs font-bold text-white">Status</label>
              <input
                className={`pt-0.7 h-10 w-full rounded border border-[#828FA340] ${
                  toggleBackground ? "bg-white" : "bg-[#2b2c37]"
                }   p-4 text-sm font-bold text-white outline-none`}
                placeholder="e.g Todo"
              />
            </div>
            <button className="h-10 w-full rounded-[20px] bg-[#635fc7] font-bold text-white">
              Create new Border
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

export default EditTask;
