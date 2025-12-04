import React, { useState } from "react";
import FormDataDiri from "../../components/form_component/FormDataDiri";
import FormPendidikan from "../../components/form_component/FormPendidikan";
import FormPengalaman from "../../components/form_component/FormPengalaman";
import FormSertifikasi from "../../components/form_component/FormSertifikasi";
import FormBahasa from "../../components/form_component/FormBahasa";

const dataNavigation = [
  {
    name: "biodata",
  },
  {
    name: "pendidikan",
  },
  {
    name: "pengalaman",
  },
  {
    name: "sertifikasi",
  },
  {
    name: "keterampilan",
  },
  {
    name: "bahasa",
  },
];
const ProfileJobSeeker = () => {
  const [state, setState] = useState("biodata");
  const [component, setComponent] = useState(<FormDataDiri />);
  const handleChangeComponent = (value) => {
    switch (value) {
      case "biodata":
        return setComponent(<FormDataDiri />);
      case "pendidikan":
        return setComponent(<FormPendidikan />);
      case "pengalaman":
        return setComponent(<FormPengalaman />);
      case "sertifikasi":
        return setComponent(<FormSertifikasi />);
      case "bahasa":
        return setComponent(<FormBahasa />);
    }
  };
  return (
    <div className=" p-8 flex gap-8">
      <div className="border-gray-300 border w-64 rounded-md p-4 h-72 ">
        <ul>
          {dataNavigation.map((item) => (
            <li
              key={item.name}
              onClick={() => {
                handleChangeComponent(item.name);
                setState(item.name);
              }}
              className={`my-2 capitalize rounded-md p-2 text-sm font-semibold ${
                state == item.name ? "bg-blue-500 text-white" : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full ">{component}</div>
    </div>
  );
};

export default ProfileJobSeeker;
