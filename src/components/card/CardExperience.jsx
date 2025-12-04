import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const CardExperience = () => {
  return (
    <div className="border rounded-md p-2 border-gray-300 relative">
      <button className="absolute top-1 right-1 bg-red-600 p-2 rounded-md">
        <FaTrash className="text-white" />
      </button>
      <div className=" flex gap-2 items-center">
        <div className="bg-blue-200 p-2 rounded-md">
          <MdWork size={40} className="text-blue-800" />
        </div>
        <div className="">
          <h6 className="font-semibold">Posisi</h6>
          <h6 className="text-sm">Nama Perusahaan</h6>
          <span className="text-sm">1 Januari 2025 - 2 Januari 2026</span>
        </div>
      </div>
    </div>
  );
};

export default CardExperience;
