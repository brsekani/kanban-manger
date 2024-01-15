import { useState } from "react";
import { useSelector } from "react-redux";
import data from "../assets/data.json";

function BoardHeaders() {
  const [selectedHeader, setSelectedHeader] = useState(1);

  const { toggleBackground } = useSelector((state) => state.ui);

  function handleSeletedHeader(id) {
    setSelectedHeader(id);
  }

  return (
    <div className="flex flex-col gap-1">
      {data.boards.map((item, index) => (
        <button
          key={index + 1}
          className={` mr-16 flex flex-row items-center gap-4 rounded-r-full pl-8  text-[#828fa3] ${
            selectedHeader === index + 1 ? "selectedHeader" : ""
          } ${
            selectedHeader !== index + 1 && toggleBackground
              ? "hover:bg-[#e7e7e7]"
              : selectedHeader !== index + 1
                ? "hover:bg-white"
                : ""
          }  transition-all duration-500`}
          onClick={() => handleSeletedHeader(index + 1)}
        >
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
              fill={` ${selectedHeader === index + 1 ? "white" : "#828fa3"}`}
            ></path>
          </svg>
          <p
            className={`mb-3 mt-3 ${
              selectedHeader === index + 1 ? "text-white" : ""
            }`}
          >
            {item.name}
          </p>
        </button>
      ))}
    </div>
  );
}

export default BoardHeaders;