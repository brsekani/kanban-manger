import { useEffect, useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { closeEditBoard } from "../Ui/UiSlice";
import { motion } from "framer-motion";

function EditBoard() {
  const myDivRef = useRef(null);

  const dispatch = useDispatch();

  const { toggleBackground } = useSelector((state) => state.ui);

  const handleClickOutside = (event) => {
    if (myDivRef.current && !myDivRef.current.contains(event.target)) {
      dispatch(closeEditBoard());
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

  // Data

  const { boards, currentBoardIndex, ClickedTaskName, ClickedTaskIndex } =
    useSelector((state) => state.data);

  const boardName = boards[currentBoardIndex].name;

  const columns = boards[currentBoardIndex].columns;

  const [inputs, setInputs] = useState(columns);
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
          <ImCross
            className="ml-auto flex md:hidden"
            color="#828FA340"
            onClick={() => {
              dispatch(closeEditBoard());
            }}
          />
          <h1
            className={`text-[1.125rem] ${
              toggleBackground ? "text-black " : "text-white"
            }   font-bold leading-6 `}
          >
            Edit Board
          </h1>

          <div className="">
            <label
              className={`text-xs font-bold  ${
                toggleBackground ? "text-[#828fa3] " : "text-white"
              } `}
            >
              Board Name
            </label>
            <input
              className={`pt-0.7  m-1 mt-1 h-10 w-full rounded border border-[#828FA340] ${
                toggleBackground ? "bg-white" : "bg-[#2b2c37]"
              }  p-4 text-sm font-bold ${
                toggleBackground ? "text-black" : "text-white"
              }  outline-none`}
              placeholder="e.g Web Development"
              defaultValue={boardName}
            />
          </div>

          <div className="scroll-container mb-1 flex max-h-52 flex-col">
            <div className="mb-1">
              <label
                className={`text-xs font-bold  ${
                  toggleBackground ? "text-[#828fa3] " : "text-white"
                } `}
              >
                Board Columns
              </label>
            </div>
            <div className="flex flex-col gap-3">
              {inputs.map((input, index) => (
                <div
                  className="flex items-center gap-5 focus:outline-none"
                  key={index}
                >
                  <input
                    className={`pt-0.7 h-10 w-full rounded border border-[#828FA340] ${
                      toggleBackground ? "bg-white" : "bg-[#2b2c37]"
                    } p-4 text-sm font-bold ${
                      toggleBackground ? "text-black" : "text-white"
                    }  outline-none`}
                    placeholder="e.g Todo"
                    value={input.name}
                    onChange={(e) => handleinputChange(index, e.target.value)}
                  />
                  {inputs.length > 1 && (
                    <ImCross
                      className="mr-3 cursor-pointer"
                      color="#828FA340"
                      onClick={() => removeInput(index)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button
              className={`h-10 w-full rounded-[20px] ${
                toggleBackground ? "bg-[#625fc721]" : "bg-white"
              }  font-bold text-[#635fc7]`}
              onClick={(e) => addInput(e)}
            >
              +Add New Column
            </button>
            <button className="h-10 w-full rounded-[20px] bg-[#635fc7] font-bold text-white">
              Save Changes
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

export default EditBoard;
