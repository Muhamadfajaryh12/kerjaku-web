import React from "react";
import LayoutEmployer from "../../layouts/LayoutEmployer";
import TextInput from "../../components/form_component/TextInput";
import Select from "react-select";
import dataKota from "../../data/data_daerah.json";

const CreateProfileCompany = () => {
  let optionsKota = [];
  dataKota.map((item) =>
    optionsKota.push({
      name: item.kota,
      value: item.kota,
    })
  );
  return (
    <LayoutEmployer>
      <div className="w-full rounded-sm shadow-sm p-4">
        <form action="">
          <div className="grid grid-cols"></div>
          <TextInput title={"Nama Perusahaan"} type={"text"} />
          <div className="grid grid-cols-2 gap-2">
            <TextInput title={"Tahun berdiri"} type={"number"} />
            <div className="mt-6">
              <Select options={optionsKota} />
            </div>
          </div>
        </form>
      </div>
    </LayoutEmployer>
  );
};

export default CreateProfileCompany;
