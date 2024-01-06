import { IoMdEye } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";

function Board() {
  return (
    <div>
      <button className="">
        <div className="fixed flex items-center justify-center bottom-8 w-14 h-12 bg-[#635FC7] rounded-r-3xl">
          <IoMdEye color="white" />
        </div>
      </button>

      <div className="flex gap-8 pb-6 px-8">
        <div className="">
          <div className="flex items-center gap-3 mb-6 font-xs uppercase font-bold tracking-[2.4px]  ">
            <FaCircle />
            <p className="text-[#828fa3]">Todo(4)</p>
          </div>

          <div className="flex flex-col gap-8  justify-center">
            <div className="flex justify-center gap-1 flex-col w-[280px] h-[110px] bg-[#2B2C37] py-5 px-4 rounded-2xl shadow-md shadow-[#364e7e1a]">
              <h1 className="line-clamp-3 text-[.9375rem] font-bold  break-words text-white ">
                Add account management
                endpointswswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwwwwww
              </h1>
              <p className="text-xs font-bold text-[#828fa3]  ">
                3 of 3 subtasks
              </p>
            </div>

            <div className="flex justify-center gap-1 flex-col w-[280px] h-[110px] bg-[#2B2C37] py-5 px-4 rounded-2xl shadow-md shadow-[#364e7e1a]">
              <h1 className="line-clamp-3 text-[.9375rem] font-bold  break-words text-white ">
                Add account management
                endpointswswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwwwwww
              </h1>
              <p className="text-xs font-bold text-[#828fa3]  ">
                3 of 3 subtasks
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-3 mb-6 font-xs uppercase font-bold tracking-[2.4px]  ">
            <FaCircle />
            <p className="text-[#828fa3]">Todo(4)</p>
          </div>

          <div className="flex flex-col gap-8  justify-center">
            <div className="flex justify-center gap-1 flex-col w-[280px] h-[110px] bg-[#2B2C37] py-5 px-4 rounded-2xl shadow-md shadow-[#364e7e1a]">
              <h1 className="line-clamp-3 text-[.9375rem] font-bold  break-words text-white ">
                Add account management
                endpointswswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwwwwww
              </h1>
              <p className="text-xs font-bold text-[#828fa3]  ">
                3 of 3 subtasks
              </p>
            </div>

            <div className="flex justify-center gap-1 flex-col w-[280px] h-[110px] bg-[#2B2C37] py-5 px-4 rounded-2xl shadow-md shadow-[#364e7e1a]">
              <h1 className="line-clamp-3 text-[.9375rem] font-bold  break-words text-white ">
                Add account management
                endpointswswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwwwwww
              </h1>
              <p className="text-xs font-bold text-[#828fa3]  ">
                3 of 3 subtasks
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6 font-xs uppercase font-bold tracking-[2.4px] opacity-0  ">
            <FaCircle />
            <p className="text-[#828fa3]">Todo(4)</p>
          </div>
          <div className="bg-linear-gradient-to-b flex items-center justify-center font-bold h-[110px] w-[280px] rounded-md">
            <button className="flex items-center justify-center font-bold h-full rounded-md text-[#828fa3]">
              + New Column
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
