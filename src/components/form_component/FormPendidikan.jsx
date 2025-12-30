import React from "react";
import TextInput from "./TextInput";
import SubTitle from "../text/SubTitle";
import CardEducation from "../card/CardEducation";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import Select from "./Select";

const dataPendidikan = [
  { name: "SD" },
  { name: "SMP" },
  { name: "SMA/SMK" },
  { name: "Diploma" },
  { name: "Sarjana" },
  { name: "Magister" },
];
const FormPendidikan = () => {
  const { state } = useAuth();
  const { register, handleSubmit } = useForm();

  const handleInsertEducation = async (data) => {
    const payload = {
      ...data,
      graduate_date: new Date(data.graduate_date).toISOString(),
    };

    const submit = await fetch(`${import.meta.env.VITE_API_URL}/education`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
      body: JSON.stringify(payload),
    });

    const response = await submit.text();
    console.log(response);
    console.log("test");
  };

  return (
    <>
      <div className="border border-gray-300 p-4 rounded-md">
        <form onSubmit={handleSubmit(handleInsertEducation)}>
          <Select
            title={"Tingkat Pendidikan"}
            name={"level"}
            {...register("level")}
            data={dataPendidikan}
            value={"name"}
            label={"name"}
          />
          <TextInput
            title={"Nama Sekolah / Universitas"}
            name={"education_name"}
            type={"text"}
            {...register("education_name")}
          />
          <TextInput title={"Jurusan"} name={"major"} {...register("major")} />
          <TextInput
            title={"Tahun Lulus"}
            name={"graduate_date"}
            type={"date"}
            {...register("graduate_date")}
          />
          <div className="flex justify-end" type="submit">
            <button className="bg-blue-600 text-white p-2 rounded-md w-32 mt-2 ">
              Simpan
            </button>
          </div>
        </form>
      </div>
      <SubTitle title={"Pendidikan Anda"} />
      <div className="flex flex-col gap-4">
        <CardEducation />
      </div>
    </>
  );
};

export default FormPendidikan;
