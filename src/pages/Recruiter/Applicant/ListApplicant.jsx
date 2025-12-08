import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import DataTable from "react-data-table-component";
import { useModal } from "../../../context/ModalContext";
import ModalDetailApplicant from "../../../components/modal/ModalDetailApplicant";

const data = [
  {
    name: "Muhamad Fajar",
    status: "Mengirim Lamaran",
  },
];
const ListApplicant = () => {
  const { openModal } = useModal();
  return (
    <div>
      <BreadCrumb text={["Lowongan", "Pelamar", "Tabel"]} />
      <DataTable
        data={data}
        columns={[
          {
            name: "Nama",
            selector: (row) => row.name,
          },
          {
            name: "Status",
            selector: (row) => row.status,
          },
          {
            name: "Aksi",
            cell: (row) => (
              <div>
                <button onClick={() => openModal(<ModalDetailApplicant />)}>
                  Lihat
                </button>
              </div>
            ),
          },
        ]}
        pagination
      />
    </div>
  );
};

export default ListApplicant;
