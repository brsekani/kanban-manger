import { useSelector } from "react-redux";

function DropDownSetting() {
  const { toggleBackground } = useSelector((state) => state.ui);

  return (
    <div
      className={`absolute right-4 z-[9999] flex w-[192px] gap-4 rounded-lg ${
        toggleBackground ? "bg-white" : "bg-[#2b2c37]"
      } `}
    >
      <ul className="flex flex-col gap-2 p-4 text-[0.9rem]">
        <li className="cursor-pointer font-normal text-[#828fa3]">
          Edit Board
        </li>
        <li className="cursor-pointer font-normal text-[#828fa3]">
          Clear Board
        </li>
        <li className="cursor-pointer font-normal text-red-400">
          Delete Board
        </li>
        <li className="cursor-pointer font-normal text-red-400">Reset Board</li>
      </ul>
    </div>
  );
}

export default DropDownSetting;
