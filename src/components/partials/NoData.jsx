import React from "react";
import { FaFolderOpen } from "react-icons/fa6";

const NoData = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col p-2">
        <div className="text-4xl text-[#9ca3af] flex justify-center w-full">
          <FaFolderOpen />
        </div>
        <span className="font-bold text-[#d1d5db] text-sm">No Data</span>
      </div>
    </>
  );
};

export default NoData;
