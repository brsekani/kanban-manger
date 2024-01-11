import { useEffect, useRef } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { closeCreateNewTask } from "../Ui/UiSlice";

function CreateNewBoard() {
  const myDivRef = useRef(null);

  const dispatch = useDispatch();

  const { toggleBackground } = useSelector((state) => state.ui);

  const handleClickOutside = (event) => {
    if (myDivRef.current && !myDivRef.current.contains(event.target)) {
      dispatch(closeCreateNewTask());
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div
      className={`absolute left-0 top-0 z-[9999] flex h-full w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,.486)]  `}
    >
      <div
        className={` m-0 rounded-none from-transparent p-0 font-normal`}
        ref={myDivRef}
      >
        <form
          className={`lg:w-[calc(100vw -2em)] absolute left-1/2 top-1/2 flex w-[30vw] -translate-x-1/2 -translate-y-1/2 transform flex-col justify-center gap-6 rounded-md ${
            toggleBackground ? "bg-white" : "bg-[#2b2c37]"
          }   p-6 md:w-[480px] `}
        >
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
              <div className="flex items-center gap-5 focus:outline-none">
                <input
                  className={`pt-0.7 h-10 w-full rounded border border-[#828FA340] ${
                    toggleBackground ? "bg-white" : "bg-[#2b2c37]"
                  } p-4 text-sm font-bold text-white outline-none`}
                  placeholder="e.g Todo"
                />
                <ImCross color="#828FA340" />
              </div>
              <button
                className={`h-10 w-full rounded-[20px] ${
                  toggleBackground ? "bg-[#625fc721]" : "bg-white"
                }  font-bold text-[#635fc7]`}
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
        </form>
      </div>
    </div>
  );
}

export default CreateNewBoard;
