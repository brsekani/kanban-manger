import { FaRegEyeSlash } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import { useState } from "react";

function SideBar() {
  const [toogleBackGround, setToogleBackGround] = useState(false);
  function handleToggle() {
    setToogleBackGround(!toogleBackGround);
  }

  return (
    <div className="w-72 h-full bg-[#2B2C37] border-r-[1.5px] border-[#3E3F4E] font-bold fixed opacity-0 ">
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 overflow-y-auto">
          <h3 className="ml-8 my-4 tracking-[2.4px] font-bold text-sm uppercase text-[#828fa3]">
            All Board<span> (3)</span>
          </h3>

          <div className="flex flex-col gap-4">
            <button className="flex flex-row items-center gap-4 ml-8 text-[#828fa3]">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                  fill="#828fa3"
                ></path>
              </svg>
              <p>Platform Launch</p>
            </button>

            <button className="flex flex-row items-center gap-4 ml-8 text-[#828fa3]">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                  fill="#828fa3"
                ></path>
              </svg>
              <p>Platform Launch</p>
            </button>
          </div>

          <div className="mt-6">
            <button className="flex flex-row items-center gap-4 ml-8 text-[#635FC5] hover:opacity-60">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                  fill="#635FC5"
                ></path>
              </svg>
              <p>+ Create New Board</p>
            </button>
          </div>
        </div>

        <footer className="text-white fixed bottom-0 w-72 ">
          <div className="flex items-center justify-center bg-[#20212C] w-[235px] h-12 ml-6 rounded-md">
            <BsFillMoonStarsFill
              className="cursor-pointer"
              onClick={handleToggle}
            />
            <button
              className="flex items-center mx-[26px] w-10 h-5 bg-[#635FC7] relative rounded-xl"
              onClick={handleToggle}
            >
              <span
                className={`absolute w-[14px] h-[14px] bg-white rounded-3xl transition-all duration-500 ${
                  toogleBackGround ? "left-[55%]" : "left-[10%]"
                }`}
              ></span>
            </button>

            <IoIosSunny className="cursor-pointer" onClick={handleToggle} />
          </div>

          <div className="flex items-center text-[#828fa3] text-[.9375rem] ml-8  cursor-pointer">
            <FaRegEyeSlash className="mr-4 my-7" />
            <p>Hide Sidebar</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SideBar;
