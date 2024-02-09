import { useEffect, useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { closeCreateNewBoard } from "../Ui/UiSlice";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { createBoard } from "../data/DataSlice";

function CreateNewBoard() {
  const [boardColumns, setBoardColumns] = useState([""]);

  const { toggleBackground } = useSelector((state) => state.ui);
  const { boards } = useSelector((state) => state.data);

  const myDivRef = useRef(null);

  const dispatch = useDispatch();

  const handleClickOutside = (event) => {
    if (myDivRef.current && !myDivRef.current.contains(event.target)) {
      dispatch(closeCreateNewBoard());
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log();

  // Setting dispatch of current board to the new board
  const currentBoard = boards.length;

  const onSubmit = (data) => {
    console.log(data);
    dispatch(
      createBoard({ data: data, currentBoard }),
      dispatch(closeCreateNewBoard()),
    );
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
          className={`lg:w-[calc(100vw -2em)] absolute left-1/2 top-1/2 flex w-[30vw] -translate-x-1/2 -translate-y-1/2 transform flex-col justify-center gap-6 rounded-md ${
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
              dispatch(closeCreateNewBoard());
            }}
          />
          <h1
            className={`text-[1.125rem] font-bold leading-6 ${
              toggleBackground ? "text-black " : "text-white"
            } `}
          >
            Add New Board
          </h1>

          <div className="">
            <label
              className={`text-xs font-bold ${
                toggleBackground ? "text-[#828fa3]  " : "text-white"
              } `}
            >
              Board Name
            </label>
            <input
              defaultValue=""
              {...register("BoardName", {
                required: "Board name is required",
                minLength: {
                  value: 3,
                  message: "Name should be at least 3 characters",
                },
                maxLength: {
                  value: 40,
                  message: "To long",
                },
              })}
              className={`pt-0.7 m-1 mt-1 h-10 w-full rounded border border-[#828FA340] ${
                toggleBackground ? "bg-white" : "bg-[#2b2c37]"
              }  p-4  text-sm
              font-bold ${
                toggleBackground ? "text-black" : "text-white"
              }  outline-none ${
                errors.BoardName ? "border-solid border-red-600" : ""
              }`}
              placeholder="e.g Web Development"
            />
            {errors.BoardName && (
              <span className="absolute right-8 top-[110px] text-[0.8125rem] font-bold text-red-600">
                {errors.BoardName.message}
              </span>
            )}
          </div>

          <div className="mb-1 flex flex-col">
            <div className="mb-1">
              <label
                className={`text-xs font-bold ${
                  toggleBackground ? "text-[#828fa3] " : "text-white"
                } `}
              >
                Board Columns
              </label>
            </div>
            <div className="scroll-container flex max-h-[9rem] flex-col gap-3 overflow-auto">
              {boardColumns.map((_, index) => (
                <div
                  className="flex items-center gap-5 focus:outline-none"
                  key={index}
                >
                  <input
                    {...register(`columns[${index}].name`, {
                      required: "can't be empty",
                    })}
                    className={`pt-0.7 m-[2px] h-10 w-full  ${
                      toggleBackground ? "bg-white" : "bg-[#2b2c37]"
                    } ${
                      toggleBackground ? "text-black" : "text-white"
                    } rounded border border-[#828FA340] bg-[#2b2c37] p-4 text-sm font-bold outline-none ${
                      errors.columns?.[index]?.name?.message
                        ? "border-solid border-red-600 "
                        : "focus:ring-2 focus:ring-[#635fc7]"
                    }`}
                    placeholder="e.g Todo"
                  />

                  {boardColumns.length > 1 && (
                    <ImCross
                      className="mr-3 cursor-pointer"
                      onClick={() => removeInput(index)}
                      color="#828FA340"
                    />
                  )}
                  {/* {errors.BoardName && (
                    <span className="text-[0.8125rem] font-bold text-red-600">
                      {errors.columns[index]?.name?.message}
                    </span>
                  )} */}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <button
              className={`h-10 w-full rounded-[20px] ${
                toggleBackground ? "bg-[#625fc721]" : "bg-white"
              }  font-bold text-[#635fc7]`}
              onClick={(e) => addInput(e)}
            >
              + Add New Column
            </button>
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

export default CreateNewBoard;
