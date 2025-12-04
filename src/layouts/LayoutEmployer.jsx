import React from "react";
import NavbarEmployer from "../components/navigation/Employer/NavbarEmployer";
import SidebarEmployer from "../components/navigation/Employer/SidebarEmployer";
import { Outlet } from "react-router-dom";

const LayoutEmployer = () => {
  return (
    <div className="w-screen min-h-screen flex">
      <SidebarEmployer />
      <div className="w-full">
        <NavbarEmployer />
        <div className="max-w-7xl w-full p-2 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutEmployer;
