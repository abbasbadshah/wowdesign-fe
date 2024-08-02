import React, { useState } from "react";
import DashboardSidebar from "../../common/Dashboard Sidebar";
import DashboardHeader from "../../common/Dashboard Header";
import { FadingBackground } from "../../shared";
import bgimage1 from "../../../assets/images/Projects/commercials.jpg";
import bgimage2 from "../../../assets/images/Projects/healthcare.jpg";
const backgroundImages = [bgimage1, bgimage2];

export const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <FadingBackground images={backgroundImages} />
      <DashboardSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        <main className="flex flex-1 flex-col p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
};
