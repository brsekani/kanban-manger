import { useDispatch } from "react-redux";
import { openCreateNewBoard } from "../Ui/UiSlice";

function EmptyBoard() {
  const dispatch = useDispatch();

  return (
    <div className="ml-[28rem] mt-48 flex flex-col items-center gap-2 text-center">
      <p className="text-white">No Board. Create a New Board</p>
      <button
        className="w-full scroll-mr-4 rounded-3xl bg-[#635FC7] px-4 py-3 font-bold text-white"
        onClick={() => dispatch(openCreateNewBoard())}
      >
        Create new Board +
      </button>
    </div>
  );
}

export default EmptyBoard;
