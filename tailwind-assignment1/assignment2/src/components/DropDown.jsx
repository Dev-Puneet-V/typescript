import { useState } from "react";
// import { ChevronUpIcon } from "@heroicons/react/24/solid";

const DropDown = ({ title, text }) => {
  const [openState, setOpenState] = useState(true);

  const handleOpen = () => {
    setOpenState(!openState);
  };

  return (
    <div className="max-md:w-[80%] m-auto mb-2 md:w-[500px] border-b-[1px] border-slate-200 pb-4">
      <div className="text-[#b3b5be] flex justify-between items-center">
        <p className={`text-[#b3b5be] ${!openState ? "text-[#fa5757]" : ""}`}>
          {title}
        </p>
        <button
          onClick={handleOpen}
          className={`cursor-pointer ${openState ? "" : "rotate-180"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 ${!openState ? "text-[#fa5757]" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
      {!openState && <p className="text-[#b3b5be] text-left">{text}</p>}
    </div>
  );
};

export default DropDown;
