import React from "react";
import { BsHammer, BsList } from "react-icons/bs";
import { useAuth } from "../../../context/AuthContext";

const NavbarEmployer = () => {
  const { Logout } = useAuth();
  return (
    <div className="w-full border-b border-gray-200 p-2 flex justify-between items-center gap-4">
      <BsList />
      <button className="mr-5" onClick={Logout}>
        Logout
      </button>
    </div>
  );
};

export default NavbarEmployer;
