import React from "react";
import TextInput from "./TextInput";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import Select from "./Select";

const dataPosition = [
  { name: "Magang" },
  { name: "Staff" },
  { name: "Manager" },
  { name: "Supervisor" },
];
const FormPengalaman = () => {
  const { state } = useAuth();
  const { register, handleSubmit } = useForm();

  const handleInsertExperience = async (data) => {
    const payload = {
      ...data,
      date_start: new Date(data.date_start).toISOString(),
      date_end: new Date(data.date_end).toISOString(),
    };

    const result = await fetch(`${import.meta.env.VITE_API_URL}/experience`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
      body: JSON.stringify(payload),
    });

    const response = await result.json();
    console.log(response);
  };
  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <form onSubmit={handleSubmit(handleInsertExperience)}>
        <TextInput
          title="Nama Pekerjaan"
          name="name_experience"
          {...register("name_experience")}
          type="text"
        />
        <Select
          data={dataPosition}
          label={"name"}
          value={"name"}
          title={"Level Posisi"}
          name={"position"}
          {...register("position")}
        />
        <TextInput
          title="Nama Perusahaan"
          name="name_company"
          {...register("name_company")}
          type="text"
        />
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            title={"Tanggal Masuk"}
            name="date_start"
            {...register("date_start")}
            type="date"
          />
          <TextInput
            title={"Tanggal Berakhir"}
            name="date_end"
            {...register("date_end")}
            type="date"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-md w-32 mt-2 "
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPengalaman;
