import React, { useState } from "react";
import TextInput from "./TextInput";
import Select from "./Select";
import ButtonPrimary from "./ButtonPrimary";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";

import dataDaerah from "../../data/data_daerah.json";
import dataTipePerusahaan from "../../data/data_tipe_perusahaan.json";
import { useApi } from "../../hooks/useApi";
const FormCompanyProfile = () => {
  const { state } = useAuth();
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const { handleAPI } = useApi();
  const { register, handleSubmit } = useForm();

  const handlePreview = (file) => {
    const createFile = URL.createObjectURL(file);
    setPreview(createFile);
    setImage(file);
  };

  const handleInsertCompany = (value) => {
    const formData = new FormData();

    formData.append("company_name", value.company_name);
    formData.append("description", value.description);
    formData.append("size", value.size);
    formData.append("location", value.location);
    formData.append("company_type", value.company_type);
    formData.append("photo", image);

    const result = handleAPI({
      url: `${import.meta.env.VITE_API_URL}/company`,
      token: state.token,
      data: formData,
      method: "POST",
    });
    console.log(result);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(handleInsertCompany)}>
        <TextInput
          type="text"
          title={"Nama Perusahaan"}
          name="company_name"
          {...register("company_name")}
        />
        <TextInput
          type="text"
          title={"Deskripsi"}
          name="description"
          {...register("description")}
        />
        <div className="grid grid-cols-3 gap-4">
          <Select
            data={dataTipePerusahaan}
            value={"type"}
            label={"type"}
            name={"company_type"}
            placeholder={"Pilih Tipe"}
            title={"Tipe"}
            {...register("company_type")}
          />{" "}
          <TextInput
            type="number"
            title={"Jumlah Pegawai"}
            name="size"
            {...register("size")}
          />
          <Select
            data={dataDaerah}
            value={"kota"}
            label={"kota"}
            name={"location"}
            placeholder={"Pilih Lokasi"}
            title={"Lokasi"}
            {...register("location")}
          />
        </div>
        <div className="flex gap-4">
          <div className="w-36 h-36 border border-gray-400 rounded-md">
            {preview && <img src={preview} className="w-36 h-36 rounded-md" />}
          </div>
          <TextInput
            title={"Foto Perusahaan"}
            type="file"
            accept=".jpg,.png"
            onChange={(e) => handlePreview(e.target.files[0])}
          />
        </div>
        <ButtonPrimary title={"Simpan"} type="submit" />
      </form>
    </div>
  );
};

export default FormCompanyProfile;
