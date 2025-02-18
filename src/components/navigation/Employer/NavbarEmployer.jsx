import React from "react";
import { BsHammer, BsList } from "react-icons/bs";

const NavbarEmployer = () => {
  return (
    <div className="w-full border-b border-gray-200 p-2 flex items-center gap-4">
      <BsList />

      <h2 className="font-bold">Admin</h2>
    </div>
  );
};

export default NavbarEmployer;
