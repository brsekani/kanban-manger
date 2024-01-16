import { useEffect, useRef, useState } from "react";
// import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { closeTaskPreview } from "../Ui/UiSlice";
import { motion } from "framer-motion";

function TaskPreview() {
  const [inputs, setInputs] = useState([""]);

  const myDivRef = useRef(null);

  const dispatch = useDispatch();

  const { toggleBackground } = useSelector((state) => state.ui);

  const handleClickOutside = (event) => {
    if (myDivRef.current && !myDivRef.current.contains(event.target)) {
      dispatch(closeTaskPreview());
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
            <img
              className="cursor-pointer"
              src="src\assets\icon-vertical-ellipsis.svg"
            />
          </div>
          <div className="">
            <p className="text-[.8125rem] text-[#828fa3]">
              Beyond the initial launch, we're keeping the initial roadmap
              completely empty. This meeting will help us plan out our next
              steps based on actual customer feedback.
            </p>
          </div>

          <div>
            <h2 className="text-[.75rem] font-bold text-white">
              Subtasks(2 of 3)
            </h2>
            <label className="mt-3 flex h-9 items-center gap-3 rounded-md bg-[#20212C] pl-3 transition duration-300 ease-in-out hover:bg-purple-500 hover:bg-opacity-25">
              <input className="h-4 min-w-4" type="checkbox" />

              <span className="text-[.75rem] font-bold text-white">
                interview 10 people
              </span>
            </label>
          </div>

          <div className="flex flex-col gap-0.5">
            <label className="mb-2 text-[.75rem] font-bold text-white">
              Current Status
            </label>
            <div className="border-rgba-130-143-163-40 flex h-9 w-full items-center rounded-md border-[0.1px] border-solid bg-transparent outline-none">
              <button>now</button>
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

export default TaskPreview;
