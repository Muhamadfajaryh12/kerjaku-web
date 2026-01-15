import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import List from "../common/List";
import CardEducation from "../card/CardEducation";
import CardExperience from "../card/CardExperience";
import CardSertifikat from "../card/CardSertifikat";
import CardBahasa from "../card/CardBahasa";
import FormApply from "../form_component/FormApply";
import BiodataSection from "../section/BiodataSection";
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
const ModalApply = () => {
  const { data } = useFetch(`${import.meta.env.VITE_API_URL}/profile`);
  const [activeTab, setActiveTab] = useState("biodata");

  const renderContent = () => {
    switch (activeTab) {
      case "biodata":
        return <BiodataSection data={data?.profile} />;
      case "pendidikan":
        return (
          <List
            label={"education"}
            data={data?.education}
            content={(item) => <CardEducation data={item} />}
          />
        );
      case "pengalaman":
        return (
          <List
            label={"experience"}
            data={data?.experience}
            content={(item) => <CardExperience data={item} />}
          />
        );
      case "sertifikasi":
        return (
          <List
            label={"certfication"}
            data={data?.certfication}
            content={(item) => <CardSertifikat data={item} />}
          />
        );
      case "keterampilan":
        return (
          <List
            label={"education"}
            data={data?.education}
            content={(item) => <CardEducation data={item} />}
          />
        );
      case "bahasa":
        return (
          <List
            label={"language"}
            data={data?.language}
            content={(item) => <CardBahasa data={item} />}
          />
        );
      default:
        break;
    }
  };
  return (
    <div onClick={(e) => e.stopPropagation()} className="h-screen w-4xl ">
      <div className="grid grid-cols-6">
        {dataNavigation.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`border border-gray-200 p-2 rounded-sm capitalize ${
              activeTab == item.name ? "bg-blue-700 text-white" : ""
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div>{renderContent()}</div>
      <FormApply />
    </div>
  );
};

export default ModalApply;
