import { useDispatch } from "react-redux";
import { openCreateNewBoard } from "../Ui/UiSlice";

function EmptyBoard() {
  const dispatch = useDispatch();

  return (
    <div className="m-auto flex flex-col items-center justify-center gap-2 p-6 text-center font-bold">
      <p className="text-white">
        This board is empty. Create a new column to get started.
      </p>
      <button
        className="w-fit scroll-mr-4 rounded-3xl bg-[#635FC7]  px-4 py-2 font-bold text-white "
        onClick={() => dispatch(openCreateNewBoard())}
      >
        Create new Board +
      </button>
    </div>
  );
}

export default EmptyBoard;
