import { useDispatch, useSelector } from "react-redux";
import {
  CloseDropDownSetting,
  openDeleteBoard,
  openEditBoard,
  openClearBoard,
  openResetBoard,
} from "../Ui/UiSlice";

function DropDownSetting() {
  const dispatch = useDispatch();
  const { toggleBackground } = useSelector((state) => state.ui);

  return (
    <div
      className={`absolute right-4 z-[9999] flex w-[192px] gap-4 rounded-lg ${
        toggleBackground ? "bg-white" : "bg-[#2b2c37]"
      } `}
    >
      <ul className="flex flex-col gap-2 p-4 text-[0.9rem]">
        <li
          className="cursor-pointer font-normal text-[#828fa3] hover:font-bold"
          onClick={() => {
            dispatch(openEditBoard());
            dispatch(CloseDropDownSetting());
          }}
        >
          Edit Board
        </li>
        <li
          className="cursor-pointer font-normal text-[#828fa3] hover:font-bold"
          onClick={() => {
            dispatch(openClearBoard());
            dispatch(CloseDropDownSetting());
          }}
        >
          Clear Board
        </li>
        <li
          className="cursor-pointer font-normal text-red-400 hover:font-bold"
          onClick={() => {
            dispatch(openDeleteBoard());
            dispatch(CloseDropDownSetting());
          }}
        >
          Delete Board
        </li>
        <li
          className="cursor-pointer font-normal text-red-400 hover:font-bold"
          onClick={() => {
            dispatch(CloseDropDownSetting());
            dispatch(openResetBoard());
          }}
        >
          Reset Board
        </li>
      </ul>
    </div>
  );
}

export default DropDownSetting;
