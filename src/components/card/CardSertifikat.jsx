import React from "react";
import { FaCertificate, FaTrash } from "react-icons/fa";

const CardSertifikat = () => {
  return (
    <div className="border rounded-md p-2 border-gray-300 relative">
      <button className="absolute top-1 right-1 bg-red-600 p-2 rounded-md">
        <FaTrash className="text-white" />
      </button>
      <div className=" flex gap-4 items-center">
        <div className="bg-blue-200 p-4 rounded-md">
          <FaCertificate size={30} className="text-blue-800" />
        </div>
        <div className="">
          <h6 className="font-semibold">Nama Sertifikat</h6>
          <h6 className="text-sm">Penerbit</h6>
          <span className="text-sm">Berlaku sampai 2 Januari 2026</span>
        </div>
      </div>
    </div>
  );
};

export default CardSertifikat;
