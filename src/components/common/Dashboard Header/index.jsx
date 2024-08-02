import React from "react";
import { Menu } from "@headlessui/react";
import UserProfileImage from "../../../assets/images/User Profile/man.jpg";
import {
  Bars3Icon,
  ArrowTopRightOnSquareIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  NewspaperIcon,
  ArrowsPointingOutIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const DashboardHeader = ({ toggleSidebar }) => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center h-16 gap-4 px-5 py-4 text-white bg-gray-800">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-full lg:hidden hover:bg-gray-700"
        aria-label="Toggle navigation"
      >
        <Bars3Icon className="w-6 h-6" />
      </button>

      {/* Visit Site Button */}
      <button className="flex items-center px-4 py-2 mx-auto text-black border-2 rounded bg-theme-color hover:bg-transparent hover:text-white border-theme-color hover:border-white">
        <Link to={"/"} className="flex items-center">
          <span className="mr-2">Visit Site</span>
          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
        </Link>
      </button>

      {/* Fullscreen Toggle Button */}
      <button
        onClick={toggleFullscreen}
        className="hidden p-2 rounded-full md:flex hover:bg-gray-700"
        aria-label="Fullscreen Mode"
      >
        <ArrowsPointingOutIcon className="w-6 h-6" />
      </button>

      {/* Profile Dropdown */}
      <Menu as="div" className="relative w-fit">
        <Menu.Button className="flex items-center space-x-2 w-fit">
          <img
            src={UserProfileImage}
            alt="User"
            className="object-cover w-10 h-10 rounded-full"
          />
          <span className="hidden md:inline">Jamie D.</span>
          <ChevronDownIcon className="w-8 text-white" />
        </Menu.Button>
        <Menu.Items className="absolute right-0 w-48 py-1 mt-2 text-gray-800 bg-white rounded-md shadow-lg">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#profile"
                className={`${
                  active ? "bg-gray-100" : ""
                } flex items-center px-4 py-2 text-sm`}
              >
                <UserIcon className="w-5 h-5 mr-2" /> Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#feed"
                className={`${
                  active ? "bg-gray-100" : ""
                } flex items-center px-4 py-2 text-sm`}
              >
                <NewspaperIcon className="w-5 h-5 mr-2" /> Feed
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#analytics"
                className={`${
                  active ? "bg-gray-100" : ""
                } flex items-center px-4 py-2 text-sm`}
              >
                <ChartBarIcon className="w-5 h-5 mr-2" /> Analytics
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#settings"
                className={`${
                  active ? "bg-gray-100" : ""
                } flex items-center px-4 py-2 text-sm`}
              >
                <Cog6ToothIcon className="w-5 h-5 mr-2" /> Settings
              </a>
            )}
          </Menu.Item>
          <hr className="my-1" />
          <Menu.Item>
            {({ active }) => (
              <a
                href="#logout"
                className={`${
                  active ? "bg-gray-100" : ""
                } flex items-center px-4 py-2 text-sm`}
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" /> Log Out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </header>
  );
};
export default DashboardHeader;
