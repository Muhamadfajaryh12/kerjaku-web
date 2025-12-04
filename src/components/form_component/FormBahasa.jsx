import React from "react";
import TextInput from "./TextInput";
import SubTitle from "../text/SubTitle";
import CardBahasa from "../card/CardBahasa";

const FormBahasa = () => {
  return (
    <>
      <div className="border border-gray-300 p-4 rounded-md">
        <form action="">
          <TextInput title={"Bahasa"} />
          <TextInput title={"Tingkat Penguasaan"} />
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white p-2 rounded-md w-32 ">
              Simpan
            </button>
          </div>
        </form>
      </div>
      <SubTitle title={"Bahasa Anda"} />
      <div className="flex flex-col">
        <CardBahasa />
      </div>
    </>
  );
};

export default FormBahasa;
