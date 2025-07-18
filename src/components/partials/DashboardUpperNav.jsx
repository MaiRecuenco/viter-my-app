import React from "react";

const DashboardUpperNav = () => {
  return (
    <>
      <header className="max-h-[64px] h-[64px] border-2 border-b-dashboard flex items-center justify-between px-4 absolute w-full top-0">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <span className="ml-2 text-xl font-bold">My App</span>
        </div>
        <div>
            <span className="inline-block w-[44px] h-[44px] border-primary border-2 rounded-full"></span>
        </div>
      </header>
    </>
  );
};

export default DashboardUpperNav;
