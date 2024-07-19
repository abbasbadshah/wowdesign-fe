import React, { useState } from "react";
import DashboardSidebar from "../../common/Dashboard Sidebar";
import DashboardHeader from "../../common/Dashboard Header";

export const DashboardLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen">
      <DashboardSidebar
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader
          toggleSidebar={toggleSidebar}
          isSidebarCollapsed={isSidebarCollapsed}
        />
        <main className="flex-1 py-10 overflow-x-hidden overflow-y-auto bg-gray-100 px-52">
          {children}
        </main>
      </div>
    </div>
  );
};
