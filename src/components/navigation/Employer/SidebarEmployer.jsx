import React from "react";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";

const SidebarEmployer = () => {
  return (
    <div className="w-72 mih-h-screen shadow-sm p-4">
      <div className="" id="profile-sidebar"></div>
      <div className="p-2">
        <div className="text-sm flex items-center gap-2 w-full p-2 bg-blue-500  text-white rounded-sm my-1">
          <MdWork size={20} />
          <Link to={"/"}>Daftar Lowongan </Link>
        </div>
        <div className="text-sm flex items-center gap-2 p-2 my-1 opacity-50 ">
          <MdWork size={20} />
          <Link to={"/"}>Profile Perusahaan </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarEmployer;
