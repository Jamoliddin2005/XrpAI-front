import React from "react";
import Button from "../buttons/signButtons";

export default function Failed() {
  return (
    <div className="flex items-center fixed w-full z-50 bacground-some-blacc text-white justify-center h-[100vh]">
      <div className="bg-[#141414] py-4 px-3 rounded-[20px] max-w-[350px] w-full">
        <div className="bg-[#43AFFF] w-[90px] h-[90px] flex items-center justify-center rounded-full transform-element marginAuto">

          <svg
            viewBox="0 0 50 50"
            fill="none"
            className="w-[45px] h-[45px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.5005 25C47.5005 12.5736 37.4269 2.5 25.0005 2.5C12.5741 2.5 2.50049 12.5736 2.50049 25C2.50049 37.4264 12.5741 47.5 25.0005 47.5C37.4269 47.5 47.5005 37.4264 47.5005 25Z"
              stroke="white"
              strokeWidth="3.375"
            />
            <path
              d="M25.5449 36.25V25C25.5449 23.9393 25.5449 23.409 25.2154 23.0795C24.8859 22.75 24.3556 22.75 23.2949 22.75"
              stroke="white"
              strokeWidth="3.375"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24.982 16H25.0022"
              stroke="white"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="neu-trial">
          <h2 className="text-lg text-center mt-4 neu-trial">
          Opening a section requires you to start the farming process!
          </h2>
          <p className="text-center neu-trial text-[#999C9E] text-xs mt-4">
          Please register to continue
          </p>
          <Button
            className={"rounded-[12px] neu-trial mt-7"}
            title={"Start the farming process"}
          ></Button>
        </div>
      </div>
    </div>
  );
}
