import React from "react";
import TextInput from "./TextInput";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";

const FormBahasa = () => {
  const { register, handleSubmit } = useForm();
  const { state } = useAuth();
  const InsertLanguage = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/language`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
  };
  return (
    <>
      <div className="border border-gray-300 p-4 rounded-md">
        <form onSubmit={handleSubmit(InsertLanguage)}>
          <TextInput
            title={"Bahasa"}
            name={"language"}
            type={"text"}
            {...register("language")}
          />
          <TextInput
            title={"Tingkat Penguasaan"}
            name={"level"}
            type={"text"}
            {...register("level")}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-md w-32 "
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormBahasa;
