import React from "react";
import TextInput from "./TextInput";
import { useForm } from "react-hook-form";
import { useFetch } from "../../hooks/useFetch";

const FormApply = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="border-t mt-2  w-full">
      <form>
        <TextInput type="file" title="Cover Letter" name="cover_letter" />
        <button className="w-full p-2 rounded-sm text-white bg-blue-700">
          Kirim Lamaran
        </button>
      </form>
    </div>
  );
};

export default FormApply;
