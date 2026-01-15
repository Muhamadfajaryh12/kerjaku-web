import React from "react";

const BiodataSection = ({ data }) => {
  return (
    <div className="p-4">
      <div className="w-32 h-32 mx-auto border">
        <img
          src={`${import.meta.env.VITE_IMAGE_URL}${data?.photo}`}
          className="w-full h-full"
          alt=""
        />
      </div>
      <div className="">
        <label htmlFor="" className="font-semibold text-sm">
          Nama Lengkap
        </label>
        <h6 className="p-2 rounded-sm border-gray-200 border">{data?.name}</h6>
      </div>{" "}
      <div className="">
        <label htmlFor="" className="font-semibold text-sm">
          Email
        </label>
        <h6 className="p-2 rounded-sm border-gray-200 border">{data?.email}</h6>
      </div>
      <div className="">
        <label htmlFor="" className="font-semibold text-sm">
          Alamat
        </label>
        <h6 className="p-2 rounded-sm border-gray-200 border">
          {data?.address}
        </h6>
      </div>
      <div className="">
        <label htmlFor="" className="font-semibold text-sm">
          Nomor Telepon
        </label>
        <h6 className="p-2 rounded-sm border-gray-200 border">{data?.phone}</h6>
      </div>
      <div className="">
        <label htmlFor="" className="font-semibold text-sm">
          Jenis Kelamin
        </label>
        <h6 className="p-2 rounded-sm border-gray-200 border">
          {data?.gender}
        </h6>
        <div className="">
          <label htmlFor="" className="font-semibold text-sm">
            Ringkasan Diri
          </label>
          <h6 className="p-2 rounded-sm border-gray-200 border">
            {data?.summary}
          </h6>
        </div>
        <div className="">
          <label htmlFor="" className="font-semibold text-sm block">
            Circulum Vitae
          </label>{" "}
          <button className="bg-red-500 text-white p-2 rounded-sm w-32 text-sm">
            Lihat CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default BiodataSection;
