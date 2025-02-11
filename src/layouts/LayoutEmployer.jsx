import React from "react";
import NavbarEmployer from "../components/navigation/Employer/NavbarEmployer";
import SidebarEmployer from "../components/navigation/Employer/SidebarEmployer";

const LayoutEmployer = ({ children }) => {
  return (
    <div className="w-screen min-h-screen flex">
      <SidebarEmployer />
      <div className="w-full">
        <NavbarEmployer />
        <div className="max-w-7xl w-full p-2 mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default LayoutEmployer;
