import React from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import DataTable from "react-data-table-component";

const data = [
  {
    name: "position",
    date_start: "12 Agusuts 2002",
    date_end: "13 Agustsu 2020",
    category: "Teknik",
    type: "Magang",
  },
];
const JobVacancyRecruiter = () => {
  return (
    <div>
      <BreadCrumb text={["Job", "List"]} />
      <DataTable
        data={data}
        columns={[
          {
            name: "Position",
            selector: (row) => row.name,
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
            name: "Aksi",
            grow: 2,
            cell: (row) => (
              <div className="flex gap-2 items-center">
                <button className="bg-blue-800 text-white p-2 rounded-sm text-xs uppercase font-semibold">
                  Lihat Pelamar
                </button>
                <button className="bg-blue-800 text-white p-2 rounded-sm text-xs uppercase font-semibold">
                  Lihat Lowongan
                </button>
                <button className="bg-orange-600 text-white p-2 rounded-sm text-xs uppercase font-semibold">
                  Edit
                </button>
                <button className="bg-red-600 text-white p-2 rounded-sm text-xs uppercase font-semibold">
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
