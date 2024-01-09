import { IoMdEye } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";

function Board({ HandleSideBar, showSideBar }) {
  return (
    <div className="flex w-full overflow-scroll  bg-[#20212c]">
      {!showSideBar && (
        <button className="" onClick={HandleSideBar}>
          <div className="fixed bottom-8 flex h-12 w-14 items-center justify-center rounded-r-3xl bg-[#635FC7]">
            <IoMdEye color="white" />
          </div>
        </button>
      )}

      <div className="h-full">
        <div className=" flex h-full gap-8 px-8 py-6 ">
          <div className="">
            <div className="font-xs mb-6 flex items-center gap-3 font-bold uppercase tracking-[2.4px]  ">
              <FaCircle />
              <p className="text-[#828fa3]">Todo(4)</p>
            </div>

            <div className="flex flex-col justify-center gap-8 pb-20">
              <div className="flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl bg-[#2B2C37] px-4 py-5 shadow-md shadow-[#364e7e1a]">
                <h1 className="line-clamp-3 break-words text-[.9375rem]  font-bold text-white ">
                  Add account management
                  endpointswswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwwwwww
                </h1>
                <p className="text-xs font-bold text-[#828fa3]  ">
                  3 of 3 subtasks
                </p>
              </div>

              <div className="flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl bg-[#2B2C37] px-4 py-5 shadow-md shadow-[#364e7e1a]">
                <h1 className="line-clamp-3 break-words text-[.9375rem]  font-bold text-white ">
                  Add account management
                  endpointswswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwwwwww
                </h1>
                <p className="text-xs font-bold text-[#828fa3]  ">
                  3 of 3 subtasks
                </p>
              </div>

              <div className="flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl bg-[#2B2C37] px-4 py-5 shadow-md shadow-[#364e7e1a]">
                <h1 className="line-clamp-3 break-words text-[.9375rem]  font-bold text-white ">
                  Add account management
                  endpointswswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwwwwww
                </h1>
                <p className="text-xs font-bold text-[#828fa3]  ">
                  3 of 3 subtasks
                </p>
              </div>

              <div className="flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl bg-[#2B2C37] px-4 py-5 shadow-md shadow-[#364e7e1a]">
                <h1 className="line-clamp-3 break-words text-[.9375rem]  font-bold text-white ">
                  Add account management
                  endpointswswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwwwwww
                </h1>
                <p className="text-xs font-bold text-[#828fa3]  ">
                  3 of 3 subtasks
                </p>
              </div>

              {/* <div className="flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl bg-[#2B2C37] px-4 py-5 shadow-md shadow-[#364e7e1a]">
                <h1 className="line-clamp-3 break-words text-[.9375rem]  font-bold text-white ">
                  Add account management
                  endpointswswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwwwwww
                </h1>
                <p className="text-xs font-bold text-[#828fa3]  ">
                  3 of 3 subtasks
                </p>
              </div>

              <div className="flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl bg-[#2B2C37] px-4 py-5 shadow-md shadow-[#364e7e1a]">
                <h1 className="line-clamp-3 break-words text-[.9375rem]  font-bold text-white ">
                  Add account management
                  endpointswswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwwwwww
                </h1>
                <p className="text-xs font-bold text-[#828fa3]  ">
                  3 of 3 subtasks
                </p>
              </div> */}
            </div>
          </div>

          <div className="">
            <div className="font-xs mb-6 flex items-center gap-3 font-bold uppercase tracking-[2.4px]  ">
              <FaCircle />
              <p className="text-[#828fa3]">Todo(4)</p>
            </div>

            <div className="flex flex-col justify-center  gap-8">
              <div className="flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl bg-[#2B2C37] px-4 py-5 shadow-md shadow-[#364e7e1a]">
                <h1 className="line-clamp-3 break-words text-[.9375rem]  font-bold text-white ">
                  Add account management
                  endpointswswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwwwwww
                </h1>
                <p className="text-xs font-bold text-[#828fa3]  ">
                  3 of 3 subtasks
                </p>
              </div>

              <div className="flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl bg-[#2B2C37] px-4 py-5 shadow-md shadow-[#364e7e1a]">
                <h1 className="line-clamp-3 break-words text-[.9375rem]  font-bold text-white ">
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
            <div className="font-xs mb-6 flex items-center gap-3 font-bold uppercase tracking-[2.4px]  ">
              <FaCircle />
              <p className="text-[#828fa3]">Todo(4)</p>
            </div>

            <div className="flex flex-col justify-center  gap-8">
              <div className="flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl bg-[#2B2C37] px-4 py-5 shadow-md shadow-[#364e7e1a]">
                <h1 className="line-clamp-3 break-words text-[.9375rem]  font-bold text-white ">
                  Add account management
                  endpointswswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwwwwww
                </h1>
                <p className="text-xs font-bold text-[#828fa3]  ">
                  3 of 3 subtasks
                </p>
              </div>

              <div className="flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl bg-[#2B2C37] px-4 py-5 shadow-md shadow-[#364e7e1a]">
                <h1 className="line-clamp-3 break-words text-[.9375rem]  font-bold text-white ">
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
            <div className="font-xs mb-6 flex items-center gap-3 font-bold uppercase tracking-[2.4px]  ">
              <FaCircle />
              <p className="text-[#828fa3]">Todo(4)</p>
            </div>

            <div className="flex flex-col justify-center  gap-8">
              <div className="flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl bg-[#2B2C37] px-4 py-5 shadow-md shadow-[#364e7e1a]">
                <h1 className="line-clamp-3 break-words text-[.9375rem]  font-bold text-white ">
                  Add account management
                  endpointswswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwwwwww
                </h1>
                <p className="text-xs font-bold text-[#828fa3]  ">
                  3 of 3 subtasks
                </p>
              </div>

              <div className="flex h-[110px] w-[280px] flex-col justify-center gap-1 rounded-2xl bg-[#2B2C37] px-4 py-5 shadow-md shadow-[#364e7e1a]">
                <h1 className="line-clamp-3 break-words text-[.9375rem]  font-bold text-white ">
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
            <div className="font-xs mb-6 flex items-center gap-3 font-bold uppercase tracking-[2.4px] opacity-0  ">
              <FaCircle />
              <p className="text-[#828fa3]">Todo(4)</p>
            </div>
            <div className="bg-linear-gradient-to-b flex h-[110px] w-[280px] items-center justify-center rounded-md font-bold">
              <button className="flex h-full items-center justify-center rounded-md font-bold text-[#828fa3]">
                + New Column
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
