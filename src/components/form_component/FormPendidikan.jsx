import React from "react";
import TextInput from "./TextInput";
import Select from "./Select";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useApi } from "../../hooks/useApi";

const dataPendidikan = [
  { name: "SD" },
  { name: "SMP" },
  { name: "SMA/SMK" },
  { name: "Diploma" },
  { name: "Sarjana" },
  { name: "Magister" },
];
const FormPendidikan = ({ handleAdded }) => {
  const { state } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { handleAPI } = useApi();
  const handleInsertEducation = (data) => {
    const payload = {
      ...data,
      graduate_date: new Date(data.graduate_date).toISOString(),
    };
    handleAPI({
      data: payload,
      method: "POST",
      handleAction: (response) => {
        handleAdded({ item: response.data, section: "education" });
      },
      url: `${import.meta.env.VITE_API_URL}/education`,
      token: state.token,
      onSuccess: reset,
    });
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
    </>
  );
};

export default FormPendidikan;
