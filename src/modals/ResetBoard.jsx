import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeResetBoard } from "../Ui/UiSlice";
import { motion } from "framer-motion";
import { resetBoard } from "../data/DataSlice";

function ResetBoard() {
  const myDivRef = useRef(null);

  const dispatch = useDispatch();

  const { toggleBackground } = useSelector((state) => state.ui);

  const handleClickOutside = (event) => {
    if (myDivRef.current && !myDivRef.current.contains(event.target)) {
      dispatch(closeResetBoard());
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const { boards, currentBoardIndex, ClickedTaskName, ClickedTaskIndex } =
    useSelector((state) => state.data);

  const BoardName = boards[currentBoardIndex]?.name;

  return (
    <div
      className={`absolute left-0 top-0 z-[9999] flex h-full w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,.486)]  `}
    >
      <motion.div
        className={`max-w-[30rem] gap-6 rounded-lg ${
          toggleBackground ? "bg-white" : "bg-[#2B2C37]"
        } p-6`}
        ref={myDivRef}
        // initial={{ y: "-100%", x: "-200px" }}
        // animate={toggleBackground ? { y: "-50%" } : { y: "-50%" }}
        // transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-[1.125rem] font-bold text-[#ea5555]">
            Reset all Boards?
          </h1>
          <p className="text-[0.8125rem] font-medium text-[#828fa3]">
            Are you sure you want to{" "}
            <span className="font-bold text-red-500">{BoardName}</span>?. This
            action will remove all boards, columns, tasks etc which where
            created by you. This action can't be reversed!
          </p>

          <div className="flex items-center gap-4">
            <button
              className="h-10 w-full rounded-[20px] bg-[#ea5555] text-[0.8125rem] font-bold text-white"
              onClick={(e) => {
                e.preventDefault();
                dispatch(resetBoard());
                dispatch(closeResetBoard());
              }}
            >
              Reset
            </button>
            <button
              className={`h-10 w-full rounded-[20px]  ${
                toggleBackground ? "bg-[#625fc721]" : "bg-white"
              } text-[0.8125rem] font-bold text-[#635fc7]`}
              onClick={(e) => {
                e.preventDefault();
                dispatch(closeResetBoard());
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ResetBoard;
