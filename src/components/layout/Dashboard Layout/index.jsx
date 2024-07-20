import React, { useState } from "react";
import DashboardSidebar from "../../common/Dashboard Sidebar";
import DashboardHeader from "../../common/Dashboard Header";
import { FadingBackground } from "../../shared";
import bgimage1 from "../../../assets/images/Projects/commercials.jpg";
import bgimage2 from "../../../assets/images/Projects/healthcare.jpg";
const backgroundImages = [bgimage1, bgimage2];

export const DashboardLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen">
      <FadingBackground images={backgroundImages} />
      <DashboardSidebar
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex flex-col w-full overflow-hidden">
        <DashboardHeader
          toggleSidebar={toggleSidebar}
          isSidebarCollapsed={isSidebarCollapsed}
        />
        <main className="flex items-center justify-center h-full">
          {children}
        </main>
      </div>
    </div>
  );
};
