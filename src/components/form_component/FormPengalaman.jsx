import React from "react";
import TextInput from "./TextInput";
import CardExperience from "../card/CardExperience";

const FormPengalaman = () => {
  return (
    <div>
      <form action="" className="p-4 rounded-md border border-gray-300">
        <TextInput title="Posisi" /> <TextInput title="Nama Perusahaan" />
        <div className="grid grid-cols-2 gap-4">
          <TextInput title={"Tanggal Masuk"} />
          <TextInput title={"Tanggal Berakhir"} />
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white p-2 rounded-md w-32 mt-2 ">
            Simpan
          </button>
        </div>
      </form>
      <h1 className="my-4 font-bold text-2xl">Pengalaman Anda</h1>
      <div className="flex flex-col gap-4 mt-4">
        <CardExperience />
      </div>
    </div>
  );
};

export default FormPengalaman;
