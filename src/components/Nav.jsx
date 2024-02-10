import { useDispatch, useSelector } from "react-redux";
import {
  CloseDropDownSetting,
  toggleDropDownSetting,
  openCreateNewtask,
  openSideBarMobile,
} from "../Ui/UiSlice";
import DropDownSetting from "./DropDownSetting";
import { useEffect, useRef } from "react";

// IMPORTED IMAAGES
import logoDarkMode from "../../src/assets/logo-dark.svg";
import logoLightMode from "../../src/assets/logo-light.svg";
import logoMobile from "../../src/assets/logo-mobile.svg";
import chervonUp from "../../src/assets/icon-chevron-up.svg";
import chervonDown from "../../src/assets/icon-chevron-down.svg";
import iconVerticalEllipsis from "../../src/assets/icon-vertical-ellipsis.svg";

function Nav() {
  const myDivRef = useRef();
  const dispatch = useDispatch();

  const {
    dropDownSettingOpen,
    isSideBarOpen,
    toggleBackground,
    isSideBarMobileOpen,
  } = useSelector((state) => state.ui);

  const { boards, currentBoardIndex } = useSelector((state) => state.data);
  const BoardName = boards[currentBoardIndex]?.name;

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
    <div className="transition-all duration-500 ease-in-out" ref={myDivRef}>
      <nav
        className={`flex h-20  w-full items-center ${
          toggleBackground ? "" : "bg-[#2b2c37]"
        } text-white transition-all duration-500 ease-in-out`}
      >
        {/* <nav className={`flex h-20  w-full items-center bg-[#2b2c37] text-white`}> */}
        <div className="flex items-center justify-between">
          <div
            className={`flex w-16 items-center gap-3 md:min-w-72 ${
              !isSideBarOpen ? "border-b-[1.5px]" : ""
            }  border-r-[1.5px] ${
              toggleBackground ? "border-[#e4ebfa]" : "border-[#3E3F4E]"
            }  py-[27px] transition-all duration-500 ease-in-out`}
          >
            <img
              className="h-6 cursor-pointer pl-6 md:hidden "
              src={logoMobile}
            />
            {toggleBackground ? (
              <img
                className="hidden h-6 cursor-pointer  pl-6 md:flex"
                src={logoDarkMode}
                alt="logo"
              />
            ) : (
              <img
                className="hidden h-6 cursor-pointer pl-6  md:flex"
                src={logoLightMode}
                alt="logo"
              />
            )}
          </div>
        </div>
        <div
          className={`flex h-full w-full items-center justify-between border-b-[1.5px]  ${
            toggleBackground ? "border-[#e4ebfa]" : "border-[#3E3F4E]"
          }  transition-all duration-500 ease-in-out`}
        >
          <div className="hidden items-center px-8 md:flex">
            <h1
              className={`cursor-pointer font-primary text-2xl font-bold ${
                toggleBackground ? "text-black" : "text-white"
              } `}
            >
              {boards.length > 0 ? BoardName : "No Board Found"}
            </h1>
          </div>

          <div
            className="ml-2 flex items-center  transition-all duration-500 ease-in-out md:hidden"
            onClick={() => dispatch(openSideBarMobile())}
          >
            <h1
              className={`cursor-pointer text-ellipsis text-nowrap font-primary text-[1.2rem] font-bold md:text-2xl ${
                toggleBackground ? "text-black" : "text-white"
              } `}
            >
              {boards.length > 0 ? BoardName : "No Board Found"}
            </h1>
            {isSideBarMobileOpen ? (
              <img src={chervonUp} alt="drop" className="ml-2 mt-1 md:hidden" />
            ) : (
              <img
                src={chervonDown}
                alt="drop"
                className="ml-2 mt-1 md:hidden"
              />
            )}
          </div>

          {boards.length > 0 && (
            <div className="flex items-center justify-between gap-4 px-8">
              <button
                className="scroll-mr-4 rounded-3xl bg-[#635FC7] px-4 py-1 font-bold md:py-3"
                onClick={() => dispatch(openCreateNewtask())}
              >
                +<span className="hidden md:inline ">Add New Task</span>
              </button>
              <img
                className="cursor-pointer"
                src={iconVerticalEllipsis}
                onClick={() => dispatch(toggleDropDownSetting())}
                alt="..."
              />
            </div>
          )}
        </div>
      </nav>
      {dropDownSettingOpen && <DropDownSetting />}
    </div>
  );
}

export default Nav;
