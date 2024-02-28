import { useDispatch, useSelector } from "react-redux";
import { openTaskPreview } from "./UiSlice";
import { setClickedTaskPreview } from "../data/DataSlice";
import { Draggable, Droppable } from "react-beautiful-dnd";

function TaskBody({ column }) {
  const { toggleBackground } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const handleTaskClick = (index) => {
    // Change parameter name to 'index'
    dispatch(
      openTaskPreview(),
      dispatch(setClickedTaskPreview({ name: column.name, index: index })), // Pass 'index'
    );
  };

  return (
    <div className="flex h-full flex-col gap-8 pb-20">
      {column?.tasks?.length > 0 ? (
        column.tasks.map(
          (
            task,
            index, // Change variable name to 'index'
          ) => (
            <Draggable
              key={task.id}
              draggableId={task.id.toString()}
              index={index}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps} // Remove duplicate
                  key={index} // Use 'index' as key
                  className={`flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl ${
                    toggleBackground ? "bg-white" : "bg-[#2B2C37]"
                  }  custom-grab-cursor px-4 py-5 shadow-md shadow-[#364e7e1a] transition-all duration-500 ease-in-out`}
                  onClick={() => handleTaskClick(index)} // Change to 'index'
                >
                  <h1
                    className={`line-clamp-3 break-words text-[.9375rem]  font-bold hover:text-[#635fc7]  ${
                      toggleBackground ? "text-black" : "text-white"
                    } `}
                  >
                    {task.title}
                  </h1>
                  <p className="text-xs font-bold text-[#828fa3]  ">
                    {
                      task?.subtasks?.filter((sub) => sub.isCompleted === true)
                        .length
                    }{" "}
                    of {task?.subtasks?.length} subtasks
                  </p>
                </div>
              )}
            </Draggable>
          ),
        )
      ) : (
        <div
          className={`custom-move-cursor flex h-[1000px] w-[280px] rounded-md border-2 border-dashed border-gray-400 p-6 px-4 py-5 shadow-md shadow-[#364e7e1a] transition-all duration-500 ease-in-out`}
        >
          <p></p>
        </div>
      )}
    </div>
  );
}

export default TaskBody;
