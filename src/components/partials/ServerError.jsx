import React from "react";
import { VscBracketError } from "react-icons/vsc";

const ServerError = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col p-2">
        <span className="text-4xl text-[#9ca3af]">
          <VscBracketError />
        </span>
        <span className="font-bold text-[#d1d5db] text-sm">Server Error</span>
      </div>
    </>
  );
};

export default ServerError;
