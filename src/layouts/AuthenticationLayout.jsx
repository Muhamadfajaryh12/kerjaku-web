import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const AuthenticationLayout = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen w-screen">
        <Outlet />
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default AuthenticationLayout;
