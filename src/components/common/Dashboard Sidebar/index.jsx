import { MdDashboard, MdPerson, MdShoppingBag, MdOutlineTask, MdBusiness, MdMessage, MdLogout } from "react-icons/md";
import React from "react";
import { SiteLogo } from "../../shared";
import { Link } from "react-router-dom";

const DashboardSidebar = ({ isCollapsed, toggleSidebar }) => {
  const sidebarItems = [
    { name: "Dashboard", icon: MdDashboard, path: "/dashboard" },
    { name: "Profile Setting", icon: MdPerson, path: "/dashboard/profile-settings" },
    { name: "Products", icon: MdShoppingBag, path: "/add-products" },
    { name: "Projects", icon: MdOutlineTask, path: "/admin/add-projects" },
    { name: "Company", icon: MdBusiness, path: "/dashboard/create-company" },
    {
      name: "Social Media",
      icon: MdMessage,
      path: "/dashboard/social-profile-settings",
    },
  ];

  return (
    <div
      className={`h-screen text-white bg-gray-900 transition-all duration-300 z-[99] ${
        isCollapsed ? "w-20" : "w-72"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 px-4 my-10">
          <SiteLogo
            white={true}
            className={isCollapsed ? "w-10 h-10" : "w-32 h-10"}
          />
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700"
            >
              <item.icon className="w-6 h-6" />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>

        {/* Logout button */}
        <div className="p-4">
          <button className="flex items-center w-full p-2 space-x-2 rounded-md hover:bg-gray-700">
            <MdLogout className="w-6 h-6" />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
