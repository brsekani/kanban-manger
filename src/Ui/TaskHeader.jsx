import { FaCircle } from "react-icons/fa6";

function TaskHeader({ column, i }) {
  const iconColour = {
    0: "#49C4E5",
    1: "#8471F2",
    2: "#67E2AE",
    3: "#e5a449",
    4: "#2a3fdb",
  };

  // Select color based on the column index
  const color = iconColour[i % Object.keys(iconColour).length];

  return (
    <div className="font-xs mb-6 flex items-center gap-3 font-bold uppercase tracking-[2.4px]  ">
      <FaCircle color={color} />
      <p className="text-[#828fa3]">
        {column.name} {column?.tasks?.length}
      </p>
    </div>
  );
}

export default TaskHeader;
