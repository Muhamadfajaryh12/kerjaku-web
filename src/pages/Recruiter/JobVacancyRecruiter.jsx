import React from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import ModalDelete from "../../components/modal/ModalDelete";
import { useAuth } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

const JobVacancyRecruiter = () => {
  const { openModal } = useModal();
  const { data } = useFetch(`${import.meta.env.VITE_API_URL}/company-vacancy`);
  console.log(data);
  return (
    <div>
      <BreadCrumb text={["Lowongan", "Tabel"]} />
      <Link to={"/recruiter/job/form"}>
        <button className="p-2 rounded-sm bg-blue-800 text-white my-2 text-sm font-semibold uppercase">
          Buat Lowongan
        </button>
      </Link>
      <DataTable
        data={data || []}
        columns={[
          {
            name: "Position",
            selector: (row) => row.name_vacancy,
          },
          {
            name: "Kategori",
            selector: (row) => row.category,
          },
          {
            name: "Tipe",
            selector: (row) => row.type,
          },
          {
            name: "Jumlah Pelamar",
            selector: (row) => row.application_count,
          },
          {
            name: "Aksi",
            grow: 2,
            cell: (row) => (
              <div className="flex gap-2 items-center">
                <Link to="/recruiter/job/applicant">
                  <button className="bg-blue-800 text-white p-2 rounded-sm text-xs uppercase font-semibold">
                    Lihat Pelamar
                  </button>
                </Link>
                <button className="bg-blue-800 text-white p-2 rounded-sm text-xs uppercase font-semibold">
                  Lihat Lowongan
                </button>
                <Link to="/recruiter/job/form">
                  <button className="bg-orange-600 text-white p-2 rounded-sm text-xs uppercase font-semibold">
                    Edit
                  </button>
                </Link>
                <button
                  className="bg-red-600 text-white p-2 rounded-sm text-xs uppercase font-semibold"
                  onClick={() => openModal(<ModalDelete />)}
                >
                  Hapus
                </button>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default JobVacancyRecruiter;
