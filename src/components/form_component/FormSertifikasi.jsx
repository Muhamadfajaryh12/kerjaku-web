import React from "react";
import TextInput from "./TextInput";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";

const FormSertifikasi = () => {
  const { state } = useAuth();
  const { register, handleSubmit } = useForm();

  const handleInsertCertification = async (data) => {
    const payload = {
      ...data,
      effective_date: new Date(data.effective_date).toISOString(),
    };
    const submit = await fetch(
      `${import.meta.env.VITE_API_URL}/certification`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const response = await submit.json();
    console.log(response);
  };
  return (
    <>
      <div className="border border-gray-300 p-4 rounded-md">
        <form onSubmit={handleSubmit(handleInsertCertification)}>
          <TextInput
            title={"Nama Sertifikat"}
            name="certification_name"
            type="text"
            {...register("certification_name")}
          />
          <TextInput
            title={"Penerbit"}
            name="publisher"
            type="text"
            {...register("publisher")}
          />
          <TextInput
            title={"Masa Berlaku Sampai"}
            name="effective_date"
            type="date"
            {...register("effective_date")}
          />
          <div className="flex justify-end">
            <button
              className="bg-blue-600 text-white p-2 rounded-md w-32 mt-2 "
              type="submit"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormSertifikasi;
