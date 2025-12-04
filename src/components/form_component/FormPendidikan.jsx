import React from "react";
import TextInput from "./TextInput";
import SubTitle from "../text/SubTitle";
import CardEducation from "../card/CardEducation";

const FormPendidikan = () => {
  return (
    <>
      <div className="border border-gray-300 p-4 rounded-md">
        <form action="">
          <TextInput title={"Tingkat Pendidikan"} />
          <TextInput title={"Nama Sekolah / Universitas"} />
          <TextInput title={"Jurusan"} />
          <TextInput title={"Tahun Lulus"} />
        </form>{" "}
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white p-2 rounded-md w-32 mt-2 ">
            Simpan
          </button>
        </div>
      </div>
      <SubTitle title={"Pendidikan Anda"} />
      <div className="flex flex-col gap-4">
        <CardEducation />
      </div>
    </>
  );
};

export default FormPendidikan;
