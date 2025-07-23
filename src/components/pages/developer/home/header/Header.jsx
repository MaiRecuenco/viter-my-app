import React, { useState } from "react";
import { apiVersion } from "../../../../helpers/function-general";
import ModalAddHeader from "./ModalAddHeader";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { FaPen, FaPlus } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalHeader, setIsModalHeader] = React.useState(false);

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

  const handleAdd = () => {
    setIsModalHeader(true);
  };
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
            <nav className="hidden md:flex space-x-6">
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
              <div className="flex items-center gap-x-3">
                <button
                  className="flex items-center gap-2 hover:underline hover:text-primary"
                  type="button"
                  onClick={handleAdd}
                >
                  <FaPen className="size-6 bg-primary rounded-full text-white object-fit p-1" />
                  Add
                </button>
              </div>
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
