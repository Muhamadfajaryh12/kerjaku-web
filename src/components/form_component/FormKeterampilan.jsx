import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import TextInput from "./TextInput";

const FormKeterampilan = () => {
  const { state } = useAuth();
  const { register, handleSubmit } = useForm();
  const handleInsertKeterampilan = async (data) => {
    const result = await fetch(`${import.meta.env.VITE_API_URL}/skill`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
      body: JSON.stringify(data),
    });

    const response = await result.json();
    console.log(response);
  };
  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <form onSubmit={handleSubmit(handleInsertKeterampilan)}>
        <TextInput
          type="text"
          name="skill"
          {...register("skill")}
          title={"Keterampilan"}
        />
        <div className="flex justify-end" type="submit">
          <button className="bg-blue-600 text-white p-2 rounded-md w-32 mt-2 ">
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormKeterampilan;
