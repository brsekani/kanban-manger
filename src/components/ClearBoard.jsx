import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeClearBoard } from "../Ui/UiSlice";
import { motion } from "framer-motion";

function ClearBoard() {
  const myDivRef = useRef(null);

  const dispatch = useDispatch();

  const { toggleBackground } = useSelector((state) => state.ui);

  const handleClickOutside = (event) => {
    if (myDivRef.current && !myDivRef.current.contains(event.target)) {
      dispatch(closeClearBoard());
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

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
            Clear this Board?
          </h1>
          <p className="text-[0.8125rem] font-medium text-[#828fa3]">
            Are you sure you want to clear the "Example Board 3" board? This
            action will remove all columns and tasks and cannot be reversed.
          </p>

          <div className="flex items-center gap-4">
            <button className="h-10 w-full rounded-[20px] bg-[#ea5555] text-[0.8125rem] font-bold text-white">
              Clear
            </button>
            <button
              className={`h-10 w-full rounded-[20px]  ${
                toggleBackground ? "bg-[#625fc721]" : "bg-white"
              } text-[0.8125rem] font-bold text-[#635fc7]`}
              onClick={(e) => {
                e.preventDefault();
                dispatch(closeClearBoard());
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

export default ClearBoard;
