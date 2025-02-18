import React from "react";
import LayoutEmployer from "../../layouts/LayoutEmployer";
import TextInput from "../../components/form_component/TextInput";

const FormJobApplication = () => {
  return (
    <LayoutEmployer title={"Formulir Pembuatan Lowongan"}>
      <div
        id="section-general"
        className="border rounded-sm border-gray-400 p-4 my-4"
      >
        <h1 className="font-bold">Informasi Umum</h1>

        <TextInput type={"text"} title={"Nama Lowongan"} />
        <TextInput type={"text"} title={"Deskripsi Pekerjaan"} />
        <div className="grid grid-cols-3 gap-2">
          <TextInput type={"date"} title={"Tanggal Pembukaan"} />
          <TextInput type={"date"} title={"Tanggal Penutupan"} />
          <TextInput type={"date"} title={"Lokasi"} />
        </div>
      </div>
      <div
        id="section-general"
        className="border rounded-sm border-gray-400 p-4 my-4"
      >
        <h1 className="font-bold">Spesifikasi Persyaratan</h1>

        <div className="grid grid-cols-3 gap-2">
          <TextInput type={"date"} title={"Umur"} />
          <TextInput type={"date"} title={"Pendidikan"} />
          <TextInput type={"date"} title={"Gaji"} />
          <TextInput type={"date"} title={"Tipe Pekerjaan"} />
          <TextInput type={"date"} title={"Tempat Kerja"} />
        </div>
      </div>
      <div
        id="section-general"
        className="border rounded-sm border-gray-400 p-4 my-4"
      >
        <h1 className="font-bold">Persyaratan Keahlian</h1>

        <div className="grid grid-cols-3 gap-2">
          <TextInput type={"date"} title={"Keahlian"} />
        </div>
      </div>
      <div
        id="section-general"
        className="border rounded-sm border-gray-400 p-4 my-4"
      >
        <h1 className="font-bold">Pertanyaan</h1>

        <div className="grid grid-cols-3 gap-2">
          <TextInput type={"date"} title={"Pertanyaan"} />
        </div>
      </div>
      <button className="mx-auto">Selesai</button>
    </LayoutEmployer>
  );
};

export default FormJobApplication;
