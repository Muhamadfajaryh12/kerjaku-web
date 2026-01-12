import React from "react";
import TextInput from "./TextInput";
import typeExperience from "../../data/data_type_pengalaman.json";
import typeLevel from "../../data/data_type_pekerjaan.json";
import dataDaerah from "../../data/data_daerah.json";
import categoryJob from "../../data/data_category_pekerjaan.json";
import dataPendidikan from "../../data/data_pendidikan.json";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useApi } from "../../hooks/useApi";
import Select from "./Select";
const FormJob = () => {
  const { state } = useAuth();
  const { handleAPI } = useApi();
  const { register, handleSubmit, reset } = useForm();

  const handleInsertJob = (data) => {
    const payload = {
      ...data,
      date_start: new Date(data.date_start).toISOString(),
      date_end: new Date(data.date_end).toISOString(),
    };

    handleAPI({
      url: `${import.meta.env.VITE_API_URL}/vacancy`,
      data: payload,
      token: state.token,
      method: "POST",
      onSuccess: reset(),
    });
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit(handleInsertJob)}>
        <TextInput
          title="Posisi Pekerjaan"
          type="text"
          name="name_vacancy"
          {...register("name_vacancy")}
        />
        <TextInput
          title="Deskripsi Pekerjaan"
          type="text"
          name="description"
          {...register("description")}
        />
        <div className="grid grid-cols-3 gap-x-2">
          <Select
            name="location"
            label={"kota"}
            value={"kota"}
            title={"Lokasi"}
            data={dataDaerah}
            {...register("location")}
          />
          <Select
            name="category"
            label={"name"}
            value={"name"}
            title="Kategori"
            data={categoryJob}
            {...register("category")}
          />
          <Select
            name="type"
            label={"name"}
            value={"name"}
            title="Tipe"
            data={typeLevel}
            {...register("type")}
          />
        </div>
        <Select
          name="education"
          label={"name"}
          value={"name"}
          title="Pendidikan"
          data={dataPendidikan}
          {...register("education")}
        />
        <Select
          name="experience"
          label={"name"}
          value={"name"}
          title="Pengalaman"
          data={typeExperience}
          {...register("experience")}
        />
        <div className="grid grid-cols-2 gap-x-2">
          <TextInput
            title="Jumlah Dibutuhkan"
            type="number"
            name="qty"
            {...register("qty")}
          />
          <TextInput
            title="Gaji "
            type="text"
            name="salary"
            {...register("salary")}
          />
          <TextInput
            title="Lowongan dibuka"
            type="date"
            name="date_start"
            {...register("date_start")}
          />
          <TextInput
            title="Lowongan ditutup"
            type="date"
            name="date_end"
            {...register("date_end")}
          />
        </div>
        <button className="bg-blue-800 text-white w-full p-2 rounded-md font-semibold my-2">
          Simpan
        </button>
      </form>
    </div>
  );
};

export default FormJob;
