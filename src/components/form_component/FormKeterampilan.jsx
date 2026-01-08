import React from "react";
import TextInput from "./TextInput";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useApi } from "../../hooks/useApi";

const FormKeterampilan = ({ handleAdded }) => {
  const { state } = useAuth();
  const { handleAPI } = useApi();
  const { register, handleSubmit, reset } = useForm();
  const handleInsertKeterampilan = (data) => {
    handleAPI({
      data: data,
      method: "POST",
      handleAction: (response) => {
        handleAdded({ item: response.data, section: "skill" });
      },
      token: state.token,
      url: `${import.meta.env.VITE_API_URL}/skill`,
      onSuccess: reset,
    });
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
