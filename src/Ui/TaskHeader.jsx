import { FaCircle } from "react-icons/fa6";

function TaskHeader({ column }) {
  return (
    <div className="font-xs mb-6 flex items-center gap-3 font-bold uppercase tracking-[2.4px]  ">
      <FaCircle />
      <p className="text-[#828fa3]">
        {column.name} {column.tasks.length}
      </p>
    </div>
  );
}

export default TaskHeader;
