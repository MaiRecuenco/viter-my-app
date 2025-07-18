import { IndentDecrease } from "lucide-react";
import React from "react";
import { ImIndentDecrease } from "react-icons/im";

const DashboardSideNav = ({ isSideNavOpen, setIsSideNavOpen }) => {
  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };
  return (
    <>
      <nav
        className={`z-[1] w-[224px] transition-all ease-in-out duration-300 fixed left-0 top-16 ${
          isSideNavOpen ? "translate-x-0" : "-translate-x-full"
        } max-w-[224px] bg-dashboard h-[calc(100dvh-64px)] text-white relative`}
      >
        <span
          onClick={toggleSideNav}
          className={`absolute ${
            isSideNavOpen ? "" : "!-right-10 !bg-dashboard"
          } -right-3 top-1 cursor-pointer bg-white h-[23px] w-[23px] rounded-full inline-flex items-center justify-center shadow-md group hover:bg-dashboard transition-all ease-in-out duration-200 `}
        >
          <IndentDecrease
            onClick={toggleSideNav}
            className={`text-dashboard h-[18px] w-[18px] group:hover:text-white transition-all ease-in-out duration-300 cursor-pointer ${
              isSideNavOpen ? "" : "text-white rotate-180"
            }`}
          />
        </span>
        <ul className="py-5">
          <li className="mb-3">
            <di className="py-1 px-5 flex items-center justify-between gap-2 hover:bg-primary transition-all ease-in-out duration-200 cursor-pointer">
              <a href="#header" className="flex items-center gap-2 w-full">
                Header
              </a>
            </di>
          </li>
          <li className="mb-3">
            <di className="py-1 px-5 flex items-center justify-between gap-2 hover:bg-primary transition-all ease-in-out duration-200 cursor-pointer">
              <a href="#banner" className="flex items-center gap-2 w-full">
                Banner
              </a>
            </di>
          </li>
          <li className="mb-3">
            <di className="py-1 px-5 flex items-center justify-between gap-2 hover:bg-primary transition-all ease-in-out duration-200 cursor-pointer">
              <a href="#services" className="flex items-center gap-2 w-full">
                Services
              </a>
            </di>
          </li>
          <li className="mb-3">
            <di className="py-1 px-5 flex items-center justify-between gap-2 hover:bg-primary transition-all ease-in-out duration-200 cursor-pointer">
              <a href="#about" className="flex items-center gap-2 w-full">
                About
              </a>
            </di>
          </li>
          <li className="mb-3">
            <di className="py-1 px-5 flex items-center justify-between gap-2 hover:bg-primary transition-all ease-in-out duration-200 cursor-pointer">
              <a
                href="#testimonials"
                className="flex items-center gap-2 w-full"
              >
                Testimonials
              </a>
            </di>
          </li>
          <li className="mb-3">
            <di className="py-1 px-5 flex items-center justify-between gap-2 hover:bg-primary transition-all ease-in-out duration-200 cursor-pointer">
              <a href="#contacts" className="flex items-center gap-2 w-full">
                Contact
              </a>
            </di>
          </li>
          <li className="mb-3">
            <di className="py-1 px-5 flex items-center justify-between gap-2 hover:bg-primary transition-all ease-in-out duration-200 cursor-pointer">
              <a href="#footer" className="flex items-center gap-2 w-full">
                Footer
              </a>
            </di>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DashboardSideNav;
