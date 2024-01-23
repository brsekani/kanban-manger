import { useDispatch, useSelector } from "react-redux";
import { openTaskPreview } from "../Ui/UiSlice";

function TaskBody() {
  const { isSideBarOpen, toggleBackground } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center gap-8 pb-20">
      <div
        className={`flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl ${
          toggleBackground ? "bg-white" : "bg-[#2B2C37]"
        }  cursor-pointer px-4 py-5 shadow-md shadow-[#364e7e1a] transition-all duration-500 ease-in-out`}
        onClick={() => dispatch(openTaskPreview())}
      >
        <h1
          className={`line-clamp-3 break-words text-[.9375rem]  font-bold hover:text-[#635fc7]  ${
            toggleBackground ? "text-black" : "text-white"
          } `}
        >
          Add account management endpoint
        </h1>
        <p className="text-xs font-bold text-[#828fa3]  ">3 of 3 subtasks</p>
      </div>

      <div
        className={`flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl ${
          toggleBackground ? "bg-white" : "bg-[#2B2C37]"
        }  cursor-pointer px-4 py-5 shadow-md shadow-[#364e7e1a] transition-all duration-500 ease-in-out`}
        onClick={() => dispatch(openTaskPreview())}
      >
        <h1
          className={`line-clamp-3 break-words text-[.9375rem]  font-bold hover:text-[#635fc7]  ${
            toggleBackground ? "text-black" : "text-white"
          } `}
        >
          Add account management endpoint
        </h1>
        <p className="text-xs font-bold text-[#828fa3]  ">3 of 3 subtasks</p>
      </div>
    </div>
  );
}

export default TaskBody;
