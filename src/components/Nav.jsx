import { useDispatch, useSelector } from "react-redux";
import {
  CloseDropDownSetting,
  toggleDropDownSetting,
  openCreateNewtask,
} from "../Ui/UiSlice";
import DropDownSetting from "./DropDownSetting";
import { useEffect, useRef } from "react";

function Nav() {
  const myDivRef = useRef();
  const dispatch = useDispatch();

  const { dropDownSettingOpen, isSideBarOpen, toggleBackground } = useSelector(
    (state) => state.ui,
  );

  const handleClickOutside = (event) => {
    if (myDivRef.current && !myDivRef.current.contains(event.target)) {
      dispatch(CloseDropDownSetting());
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div ref={myDivRef}>
      <nav
        className={`flex h-20  w-full items-center ${
          toggleBackground ? "" : "bg-[#2b2c37]"
        } text-white transition-all duration-500`}
      >
        {/* <nav className={`flex h-20  w-full items-center bg-[#2b2c37] text-white`}> */}
        <div className="flex items-center justify-between">
          <div
            className={`flex min-w-72 items-center gap-3 ${
              !isSideBarOpen ? "border-b-[1.5px]" : ""
            }  border-r-[1.5px] ${
              toggleBackground ? "border-[#e4ebfa]" : "border-[#3E3F4E]"
            }  py-[27px]`}
          >
            {toggleBackground ? (
              <img
                className="h-6 cursor-pointer pl-6"
                src="src\assets\logo-dark.svg"
              />
            ) : (
              <img
                className="h-6 cursor-pointer pl-6"
                src="src\assets\logo-light.svg"
              />
            )}
          </div>
        </div>
        <div
          className={`flex h-full w-full items-center justify-between border-b-[1.5px]  ${
            toggleBackground ? "border-[#e4ebfa]" : "border-[#3E3F4E]"
          } px-8`}
        >
          <h1
            className={`cursor-pointer font-primary text-2xl font-bold ${
              toggleBackground ? "text-black" : "text-white"
            } `}
          >
            Platform Launch
          </h1>
          <div className="flex items-center justify-between gap-4">
            <button
              className="scroll-mr-4 rounded-3xl bg-[#635FC7] px-4 py-3 font-bold"
              onClick={() => dispatch(openCreateNewtask())}
            >
              +Add New Task
            </button>
            <img
              className="cursor-pointer"
              src="src\assets\icon-vertical-ellipsis.svg"
              onClick={() => dispatch(toggleDropDownSetting())}
            />
          </div>
        </div>
      </nav>
      {dropDownSettingOpen && <DropDownSetting />}
    </div>
  );
}

export default Nav;
