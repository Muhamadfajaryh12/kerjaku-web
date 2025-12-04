import React from "react";
import TextInput from "./TextInput";
import SubTitle from "../text/SubTitle";
import CardSertifikat from "../card/CardSertifikat";

const FormSertifikasi = () => {
  return (
    <>
      <div className="border border-gray-300 p-4 rounded-md">
        <form action="">
          <TextInput title={"Nama Sertifikat"} />
          <TextInput title={"Penerbit"} />
          <TextInput title={"Masa Berlaku Sampai"} />
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white p-2 rounded-md w-32 mt-2 ">
              Simpan
            </button>
          </div>
        </form>
      </div>
      <SubTitle title={"Sertifikat Anda"} />
      <div className="flex flex-col gap-4 ">
        <CardSertifikat />
      </div>
    </>
  );
};

export default FormSertifikasi;
