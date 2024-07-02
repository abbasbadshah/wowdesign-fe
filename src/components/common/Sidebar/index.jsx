import { SiteLogo } from "../../shared";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const navigateToPortfolios = () => {
    navigate("/portfolios");
  };
  const navigateToProjects = () => {
    navigate("/projects");
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div>
      <div
        className={`fixed inset-y-0 right-0 flex flex-col justify-between overflow-scroll z-[999] w-full lg:w-[700px] bg-white text-gray-700 text-left transition-transform duration-300 transform pt-0 pb-16 px-4 lg:px-16 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <SiteLogo width={"200px"} />
          <div className="flex items-center justify-between lg:hidden">
            <SiteLogo width={"200px"} />
            <XMarkIcon
              className="w-6 h-6 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
          <nav className="mt-10 text-lg tracking-widest lg:mt-40">
            <ul className="cursor-pointer">
              <li className="mb-2">
                <a href="/" className="block px-3 py-2 rounded-md">
                  HOME
                </a>
              </li>
              <li className="mb-2">
                <a
                  onClick={navigateToProjects}
                  className="block px-3 py-2 rounded-md"
                >
                  PROJECTS
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="block px-3 py-2 rounded-md"
                  onClick={navigateToPortfolios}
                >
                  PORTFOLIO
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold tracking-widest">Get in touch</h1>
          <div className="flex flex-col">
            <a href="mailto:example@mail.com">example@mail.com</a>
            <a href="tel:999900000">+91 99999 00000</a>
          </div>
          <div>
            <ul className="flex gap-3 mt-4">
              <li>
                <a href="/" className="hover:underline hover:transition">
                  FB
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:transition">
                  In
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:transition">
                  Ln
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:transition">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
};

export default Sidebar;
