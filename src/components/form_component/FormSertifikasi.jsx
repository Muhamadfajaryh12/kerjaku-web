import React from "react";
import TextInput from "./TextInput";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useApi } from "../../hooks/useApi";

const FormSertifikasi = ({ handleAdded }) => {
  const { state } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { handleAPI } = useApi();
  const handleInsertCertification = async (data) => {
    const payload = {
      ...data,
      effective_date: new Date(data.effective_date).toISOString(),
    };
    handleAPI({
      url: `${import.meta.env.VITE_API_URL}/certification`,
      token: state.token,
      data: payload,
      method: "POST",
      handleAction: (response) => {
        handleAdded({ item: response.data, section: "certification" });
      },
      onSuccess: reset(),
    });
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
