import LayoutJobSeeker from "../../layouts/LayoutJobSeeker";
import Searchbar from "../../components/common/Searchbar";
import CardCompany from "../../components/common/CardCompany";

const CompanyVacancy = () => {
  return (
    <>
      <div className="flex gap-2">
        <Searchbar style="grow-4" />
        <Searchbar style="grow-4" />

        <button className="uppercase bg-blue-400 text-white font-semibold p-2 text-sm rounded-sm  grow-2">
          Cari
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 my-4">
        <CardCompany />
        <CardCompany />
        <CardCompany />
        <CardCompany />
        <CardCompany />
        <CardCompany /> <CardCompany /> <CardCompany /> <CardCompany />
        <CardCompany />
      </div>
    </>
  );
};
export default CompanyVacancy;
