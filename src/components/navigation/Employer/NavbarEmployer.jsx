import React from "react";
import { BsHammer, BsList } from "react-icons/bs";

const NavbarEmployer = () => {
  return (
    <div className="w-full border-b border-gray-200 p-2 flex justify-between items-center gap-4">
      <BsList />
      <button className="mr-5">Logout</button>
    </div>
  );
};

export default NavbarEmployer;
