import { useEffect, useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { closeAddNewColumn } from "../Ui/UiSlice";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { addNewColumn } from "../data/DataSlice";

function AddNewColumn() {
  const { toggleBackground } = useSelector((state) => state.ui);
  const { boards, currentBoardIndex } = useSelector((state) => state.data);

  const [boardColumns, setBoardColumns] = useState([]);

  const BoardName = boards[currentBoardIndex]?.name;

  const myDivRef = useRef(null);

  const dispatch = useDispatch();

  const handleClickOutside = (event) => {
    if (myDivRef.current && !myDivRef.current.contains(event.target)) {
      dispatch(closeAddNewColumn());
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  //Add Board Column
  const addInput = (e) => {
    e.preventDefault();
    setBoardColumns([...boardColumns, ""]);
  };

  // Remove Board Column
  const removeInput = (index) => {
    const newBoardColumns = [...boardColumns];
    newBoardColumns.splice(index, 1);
    setBoardColumns(newBoardColumns);
  };

  // Handlde Board Column
  const handleinputChange = (index, value) => {
    const newBoardColumns = [...boardColumns];
    newBoardColumns[index] = value;
    setBoardColumns(newBoardColumns);
  };

  // FORM
  const { register, handleSubmit, formState: errors } = useForm();

  const onSubmit = (data) => {
    dispatch(addNewColumn(data));
    dispatch(closeAddNewColumn());
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
          className={`lg:w-[calc(100vw -2em)] absolute left-1/2 top-1/2 flex w-[30vw] -translate-x-1/2 -translate-y-1/2 transform flex-col justify-center gap-2 rounded-md ${
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
              dispatch(closeAddNewColumn());
            }}
          />

          <h1
            className={`text-[1.125rem] font-bold leading-6 ${
              toggleBackground ? "text-black " : "text-white"
            } `}
          >
            Add New Column
          </h1>

          <div className="">
            <label
              className={`text-xs font-bold ${
                toggleBackground ? "text-[#828fa3]  " : "text-white"
              } `}
            >
              Name
            </label>
            <input
              className={`pt-0.7 m-1 mt-1 h-10 w-full rounded border border-[#57575740] ${
                toggleBackground ? "bg-white" : "bg-[#2b2c37]"
              }  p-4  text-sm
              font-bold ${
                toggleBackground ? "text-black" : "text-[#747474]"
              }  outline-none`}
              value={BoardName}
              disabled
            />
          </div>

          <div className="mb-1 flex flex-col">
            <div className="mb-1">
              <label
                className={`text-xs font-bold ${
                  toggleBackground ? "text-[#828fa3] " : "text-white"
                } `}
              >
                Columns
              </label>
            </div>
            <div className="flex flex-col gap-3">
              {/* old Column*/}
              {boards[currentBoardIndex].columns.map((boardColumn, index) => (
                <div
                  className="flex items-center gap-5 focus:outline-none"
                  key={index}
                >
                  <input
                    onChange={(e) => handleinputChange(index, e.target.value)}
                    value={boardColumn.name}
                    className={`pt-0.7 h-10 w-full ${
                      toggleBackground ? "bg-white" : "bg-[#2b2c37]"
                    } ${
                      toggleBackground ? "text-black" : "text-white"
                    } rounded border border-[#828FA340] bg-[#2b2c37] p-4 text-sm font-bold outline-none`}
                    placeholder="e.g Todo"
                    disabled
                  />
                  <ImCross className="cursor-pointer" color="#828FA340" />
                </div>
              ))}
              {/* New Columns */}
              {boardColumns.map((boardColumn, index) => (
                <div
                  className="flex items-center gap-5 focus:outline-none"
                  key={index}
                >
                  <input
                    {...register(`columns[${index}].name`, {
                      required: true,
                      minLength: {
                        value: 1,
                        message: "Can't be empty",
                      },
                    })}
                    onChange={(e) => handleinputChange(index, e.target.value)}
                    value={boardColumn.name}
                    className={`pt-0.7 h-10 w-full ${
                      toggleBackground ? "bg-white" : "bg-[#2b2c37]"
                    } ${
                      toggleBackground ? "text-black" : "text-white"
                    }   rounded border border-[#828FA340] bg-[#2b2c37] p-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#635fc7] `}
                    placeholder="e.g Todo"
                  />
                  <ImCross
                    className="cursor-pointer"
                    onClick={() => removeInput(index)}
                    color="#80808b"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            {boards[currentBoardIndex].columns.length + boardColumns.length <
              5 && (
              <button
                className={`h-10 w-full rounded-[20px] ${
                  toggleBackground ? "bg-[#625fc721]" : "bg-white"
                }  font-bold text-[#635fc7]`}
                onClick={(e) => addInput(e)}
              >
                +Add New Column
              </button>
            )}
            <button
              type="submit"
              className="h-10 w-full rounded-[20px] bg-[#635fc7] font-bold text-white"
            >
              Create new Border
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

export default AddNewColumn;
