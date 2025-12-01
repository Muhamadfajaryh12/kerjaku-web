import CardVacancy from "../../components/common/CardVacancy";
import Searchbar from "../../components/common/Searchbar";
import Sidebar from "../../components/navigation/Sidebar";
import LayoutJobSeeker from "../../layouts/LayoutJobSeeker";
import Select from "react-select";

import dataDaerah from "../../data/data_daerah.json";
const LowonganKerjaPage = () => {
  let options = [];
  dataDaerah.map((item) =>
    options.push({ value: item.kota, label: item.kota })
  );

  return (
    <>
      <div className="flex gap-2 items-center">
        <div className="grow-5">
          <Searchbar />
        </div>
        <div className="grow-3">
          <Select
            options={options}
            className="bg-red-200"
            placeholder="Pilih Kota"
          />
        </div>
        {/* <ButtonPrimary title={"Cari"} /> */}
        <button className="uppercase bg-blue-400 text-white font-semibold p-2 text-sm rounded-sm  grow-2">
          Cari
        </button>
      </div>
      <div className="my-4 flex gap-4 justify-evenly">
        <Sidebar />
        <div className="grow-2">
          <div className=" grid grid-cols-3 gap-4 p-2 ">
            <CardVacancy /> <CardVacancy />
            <CardVacancy /> <CardVacancy />
            <CardVacancy />
          </div>
        </div>
      </div>
    </>
  );
};

export default LowonganKerjaPage;
