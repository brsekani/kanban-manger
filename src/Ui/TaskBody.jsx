import { useDispatch, useSelector } from "react-redux";
import { openTaskPreview } from "./UiSlice";
import { setClickedTaskPreview } from "../data/DataSlice";

function TaskBody({ column }) {
  const { isSideBarOpen, toggleBackground } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  // const task = data.boards[0].columns.map((column) =>
  //   column.tasks.map((task) => task),
  // );

  // console.log(task);

  return (
    <div className="flex h-full flex-col gap-8 pb-32 ">
      {column?.tasks?.length > 0 ? (
        column.tasks.map((task, i) => (
          <div
            key={i} // Add a unique key for each task
            className={`flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl ${
              toggleBackground ? "bg-white" : "bg-[#2B2C37]"
            }  cursor-pointer px-4 py-5 shadow-md shadow-[#364e7e1a] transition-all duration-500 ease-in-out`}
            onClick={() =>
              dispatch(
                openTaskPreview(),
                dispatch(
                  setClickedTaskPreview({ name: column.name, index: i }),
                ),
              )
            }
          >
            <h1
              className={`line-clamp-3 break-words text-[.9375rem]  font-bold hover:text-[#635fc7]  ${
                toggleBackground ? "text-black" : "text-white"
              } `}
            >
              {task.title}
            </h1>
            <p className="text-xs font-bold text-[#828fa3]  ">
              3 of {task?.subtasks?.length} subtasks
            </p>
          </div>
        ))
      ) : (
        <div
          className={`flex h-full w-[280px] cursor-pointer rounded-md border-2 border-dashed border-gray-400 p-6 px-4 py-5 shadow-md shadow-[#364e7e1a] transition-all duration-500 ease-in-out`}
        >
          <p></p>
        </div>
      )}
    </div>
  );
}

export default TaskBody;
