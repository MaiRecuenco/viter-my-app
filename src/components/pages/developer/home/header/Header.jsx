import React, { useState } from "react";
import { apiVersion } from "../../../../helpers/function-general";
import ModalAddHeader from "./ModalAddHeader";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { HiPencil } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [
    isModalHeader, //getter = get data
    setIsModalHeader, //setter = set data
  ] = React.useState(false);

  const handleAdd = () => {
    setIsModalHeader(true);
  };

  const {
    isLoading,
    isFetching,
    error,
    // data: dataServices,
  } = useQueryData(
    `${apiVersion}/controllers/developer/web-services/web-services.php`,
    "get",
    "web-services"
  );

  return (
    <>
      <header id="header" className="bg-white shadow-md relative w-full">
        <div className="container mx-auto px-4 py-7 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
            <span className="ml-2 text-xl font-bold">MyApp</span>
          </div>

          {/* Desktop Navigation */}
          <div className="relative ">
            <nav className="hidden md:flex space-x-6 items-center">
              <a href="#" className="hover:text-primary">
                Home
              </a>
              <a href="#about" className="hover:text-primary">
                About
              </a>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
              <a href="#contacts" className="hover:text-primary">
                Contact
              </a>
              <button
                className="tooltip"
                data-tooltip="Add"
                type="button"
                //onClick={() => handleAdd(data, values)} //other syntax
                onClick={handleAdd}
              >
                <HiPencil
                  className="bg-primary text-white size-6 p-1 border 
                transition-all ease-in-out duration-200 rounded-full "
                />
              </button>
            </nav>
            {/* <div className="absolute right-0 top-1/3"></div> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu (now positioned absolutely) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg px-4 py-2 space-y-2 border-t border-gray-200">
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#"
              className="block py-2 hover:text-primary"
            >
              Home
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#about"
              className="block py-2 hover:text-primary"
            >
              About
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#services"
              className="block py-2 hover:text-primary"
            >
              Services
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#contacts"
              className="block py-2 hover:text-primary"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {isModalHeader && <ModalAddHeader setIsModal={setIsModalHeader} />}
    </>
  );
};

export default Header;
