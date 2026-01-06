import React, { useState } from "react";
import FormDataDiri from "../../components/form_component/FormDataDiri";
import FormPengalaman from "../../components/form_component/FormPengalaman";
import FormSertifikasi from "../../components/form_component/FormSertifikasi";
import FormBahasa from "../../components/form_component/FormBahasa";
import { useFetch } from "../../hooks/useFetch";
import PendidikanSection from "../../components/section/PendidikanSection";
import BahasaSection from "../../components/section/BahasaSection";
import SertifikatSection from "../../components/section/SertifikatSection";
import PengalamanSection from "../../components/section/PengalamanSection";
import KeterampilanSection from "../../components/section/KeterampilanSection";

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
  const { data } = useFetch(`${import.meta.env.VITE_API_URL}/profile`);
  const [state, setState] = useState("biodata");
  const [component, setComponent] = useState(<FormDataDiri />);
  const handleChangeComponent = (value) => {
    switch (value) {
      case "biodata":
        return setComponent(<FormDataDiri />);
      case "pendidikan":
        return setComponent(<PendidikanSection data={data.education} />);
      case "pengalaman":
        return setComponent(<PengalamanSection data={data.experience} />);
      case "sertifikasi":
        return setComponent(<SertifikatSection data={data.certification} />);
      case "bahasa":
        return setComponent(<BahasaSection data={data.language} />);
      case "keterampilan":
        return setComponent(<KeterampilanSection data={data.skill} />);
      default:
        break;
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
