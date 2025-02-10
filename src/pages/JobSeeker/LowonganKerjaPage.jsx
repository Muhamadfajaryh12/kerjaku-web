import CardVacancy from "../../components/common/CardVacancy";
import Searchbar from "../../components/common/Searchbar";
import Sidebar from "../../components/navigation/Sidebar";
import LayoutJobSeeker from "../../layouts/LayoutJobSeeker";

const LowonganKerjaPage = () => {
  return (
    <LayoutJobSeeker>
      <div className="flex gap-2">
        <Searchbar style="grow-4" />
        <Searchbar style="grow-4" />
        {/* <ButtonPrimary title={"Cari"} /> */}
        <button className="uppercase bg-blue-400 text-white font-semibold p-2 text-sm rounded-sm  grow-3">
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
    </LayoutJobSeeker>
  );
};

export default LowonganKerjaPage;
