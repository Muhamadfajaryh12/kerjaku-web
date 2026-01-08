import React from "react";
import TextInput from "./TextInput";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useApi } from "../../hooks/useApi";

const FormBahasa = ({ handleAdded }) => {
  const { register, handleSubmit, reset } = useForm();
  const { state } = useAuth();
  const { handleAPI } = useApi();
  const InsertLanguage = (data) => {
    handleAPI({
      url: `${import.meta.env.VITE_API_URL}/language`,
      method: "POST",
      data: data,
      token: state.token,
      handleAction: (response) => {
        handleAdded({ item: response.data, section: "language" });
      },
      onSuccess: reset(),
    });
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
