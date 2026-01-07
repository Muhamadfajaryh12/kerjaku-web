import React, { useState } from "react";
import FormDataDiri from "../../components/form_component/FormDataDiri";
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
  const { data, DeleteData, AddedData } = useFetch(
    `${import.meta.env.VITE_API_URL}/profile`
  );
  const [activeTab, setActiveTab] = useState("biodata");

  const renderContent = () => {
    switch (activeTab) {
      case "biodata":
        return <FormDataDiri data={data?.profile} />;
      case "pendidikan":
        return (
          <PendidikanSection
            data={data?.education}
            handleDelete={DeleteData}
            handleAdded={AddedData}
          />
        );
      case "pengalaman":
        return <PengalamanSection data={data?.experience} />;
      case "sertifikasi":
        return <SertifikatSection data={data?.certification} />;
      case "bahasa":
        return <BahasaSection data={data?.language} />;
      case "keterampilan":
        return <KeterampilanSection data={data?.skill} />;
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
                setActiveTab(item.name);
              }}
              className={`my-2 capitalize rounded-md p-2 text-sm font-semibold ${
                activeTab == item.name ? "bg-blue-500 text-white" : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full ">{renderContent()}</div>
    </div>
  );
};

export default ProfileJobSeeker;
