import React, { useEffect, useState } from "react";
import TextInput from "./TextInput";
import { useForm } from "react-hook-form";
import Select from "./Select";
import { useAuth } from "../../context/AuthContext";

const dataGender = [{ name: "Laki-Laki" }, { name: "Perempuan" }];
const FormDataDiri = ({ data }) => {
  const { state } = useAuth();
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const { register, handleSubmit, setValue } = useForm({
    name: "",
  });
  console.log(data);
  useEffect(() => {
    console.log(data);
    if (data) {
      setValue("name", data.name);
      setValue("email", data.email);
      setValue("address", data.address);
      setValue("gender", data.gender);
      setValue("phone", data.phone);
      setValue("summary", data.summary);
      setPreview(data.photo);
    }
  }, [data]);

  const handleChangeImage = (value) => {
    const file = URL.createObjectURL(value);
    setPreview(file);
    setImage(value);
  };

  const handleInsertProfile = async (value) => {
    const formData = new FormData();
    formData.append("name", value.name);
    formData.append("email", value.email);
    formData.append("address", value.address);
    formData.append("birth", new Date(value.birth).toISOString());
    formData.append("gender", value.gender);
    formData.append("phone", value.phone);
    formData.append("summary", value.summary);
    formData.append("cv", value.cv);
    formData.append("photo", image);

    const result = await fetch(`${import.meta.env.VITE_API_URL}/profile`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
      body: formData,
    });

    const response = await result.json();
    console.log(response);
  };

  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <form onSubmit={handleSubmit(handleInsertProfile)}>
        <div className="flex justify-center gap-4  w-full">
          <div className="">
            <div
              className="border border-gray-300 rounded-sm h-48 w-48 mt-2"
              id="preview"
            >
              {preview && <img src={preview} className="w-full h-full" />}
            </div>
            <input
              type="file"
              onChange={(e) => handleChangeImage(e.target.files[0])}
            />
          </div>
          <div className="w-full flex-1">
            <TextInput
              title={"Nama Lengkap"}
              type="text"
              name="name"
              {...register("name")}
            />
            <TextInput
              title={"Email Aktif"}
              type="email"
              {...register("email")}
              name="email"
            />
            <TextInput
              title={"Alamat"}
              type="text"
              {...register("address")}
              name="address"
            />
            <TextInput
              title={"Tanggal Lahir"}
              type="date"
              {...register("birth")}
              name="birth"
            />
            <Select
              data={dataGender}
              label={"name"}
              value={"name"}
              name={"gender"}
              title={"Jenis Kelamin"}
              placeholder={"Pilih jenis kelamin"}
              {...register("gender")}
            />
            <TextInput
              title={"Nomor HP"}
              type="text"
              {...register("phone")}
              name="phone"
            />
            <TextInput
              title={"Ringkasan Diri"}
              type="text"
              name="summay"
              {...register("summary")}
            />
            <TextInput title={"CV"} type="file" name="cv" {...register("cv")} />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white p-2 rounded-md w-32 ">
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormDataDiri;
