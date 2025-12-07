import React from "react";
import TextInput from "./TextInput";

const FormJob = () => {
  return (
    <div>
      <form action="" className="">
        <TextInput title="Posisi Pekerjaan" />
        <TextInput title="Deskripsi Pekerjaan" />
        <div className="grid grid-cols-3 gap-x-2">
          <TextInput title="Lokasi" />
          <TextInput title="Kategori" />
          <TextInput title="Tipe" />
        </div>
        <TextInput title="Pendidikan" />
        <TextInput title="Pengalaman" />
        <div className="grid grid-cols-2 gap-x-2">
          <TextInput title="Jumlah Dibutuhkan" />
          <TextInput title="Gaji " />
          <TextInput title="Lowongan dibuka" type="date" />
          <TextInput title="Lowongan ditutup" type="date" />
        </div>
        <button className="bg-blue-800 text-white w-full p-2 rounded-md font-semibold my-2">
          Simpan
        </button>
      </form>
    </div>
  );
};

export default FormJob;
