import { ImCross } from "react-icons/im";

function CreateNewBoard() {
  return (
    <div className="absolute left-0 top-0 z-[9999] flex h-full w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,.486)]">
      <div className="m-0 rounded-none from-transparent p-0 font-normal ">
        <form className="lg:w-[calc(100vw -2em)] absolute left-1/2 top-1/2 flex w-[30vw] -translate-x-1/2 -translate-y-1/2 transform flex-col justify-center gap-6 rounded-md bg-[#2b2c37]  p-6 md:w-[480px] ">
          <h1 className="text-[1.125rem] font-bold leading-6 text-white">
            Add New Board
          </h1>

          <div className="">
            <label className="text-xs font-bold text-white">Board Name</label>
            <input
              className="m-1 mt-1 h-10 w-full rounded border border-[#828FA340] bg-[#2b2c37] outline-none"
              placeholder="e.g Web Development"
            />
          </div>

          <div className="flex flex-col">
            <div>
              <label className="text-xs font-bold text-white">
                Board Columns
              </label>
            </div>
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-5 ">
                <input className="h-10 w-full rounded border border-[#828FA340] bg-[#2b2c37] outline-none" />
                <ImCross color="#828FA340" />
              </button>

              <button className="flex items-center gap-5 ">
                <input className="h-10 w-full rounded border border-[#828FA340] bg-[#2b2c37] outline-none" />
                <ImCross color="#828FA340" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <button className="h-10 w-full rounded-[20px] bg-white font-bold text-[#635fc7]">
              +Add New Column
            </button>
            <button className="h-10 w-full rounded-[20px] bg-[#635fc7] font-bold text-white">
              Create new Border
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNewBoard;
