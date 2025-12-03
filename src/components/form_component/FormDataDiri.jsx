import React from "react";
import TextInput from "./TextInput";

const FormDataDiri = () => {
  return (
    <div className="">
      <form className="flex flex-col gap-2">
        <TextInput title={"Nama Lengkap"} />
        <TextInput title={"Email Aktif"} />
        <TextInput title={"Alamat"} />
        <TextInput title={"Nomor HP"} />
        <TextInput title={"Ringkasan Diri"} />
      </form>
    </div>
  );
};

export default FormDataDiri;
