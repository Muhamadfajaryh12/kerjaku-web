import React from "react";
import TextInput from "./TextInput";
import { useForm } from "react-hook-form";

const FormDataDiri = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <form className="">
        <TextInput title={"Nama Lengkap"} />
        <TextInput title={"Email Aktif"} />
        <TextInput title={"Alamat"} />
        <TextInput title={"Nomor HP"} />
        <TextInput title={"Ringkasan Diri"} />
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white p-2 rounded-md w-32 ">
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormDataDiri;
