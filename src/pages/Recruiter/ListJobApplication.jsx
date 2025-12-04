import { Link } from "react-router-dom";
import CardVacancy from "../../components/common/CardVacancy";
import LayoutEmployer from "../../layouts/LayoutEmployer";

const ListJobApplication = () => {
  return (
    <LayoutEmployer title={"Daftar Lowongan Kerja"}>
      <div className="flex justify-between items-center">
        <h6>Tersedia : </h6>
        <Link
          to={"/perusahaan/daftar-lowongan-kerja/formulir"}
          className="p-2 uppercase text-xs bg-blue-600 rounded-sm text-white font-semibold"
        >
          Tambah
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-3 my-2">
        <CardVacancy admin={true} />
        <CardVacancy admin={true} />
        <CardVacancy admin={true} />
        <CardVacancy admin={true} />
        <CardVacancy admin={true} />
        <CardVacancy admin={true} />
        <CardVacancy admin={true} />
        <CardVacancy admin={true} />
        <CardVacancy admin={true} />
      </div>
    </LayoutEmployer>
  );
};

export default ListJobApplication;
