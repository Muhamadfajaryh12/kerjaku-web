import React from "react";
import { MdWarning } from "react-icons/md";
import { useModal } from "../../context/ModalContext";

const ModalDelete = ({ handleDelete }) => {
  const { closeModal } = useModal();
  return (
    <div className="p-4" onClick={(e) => e.stopPropagation()}>
      <div className="text-center">
        <MdWarning className="text-red-600 mx-auto" size={40} />
        <h1>Yakin ingin menghapus lowongan pekerjaan ini?.</h1>
        <p>Hal ini akan menghapus data pelamar pekerjaan tersebut.</p>
      </div>
      <div className="flex gap-4 justify-center mt-6">
        <button
          className="p-2 bg-blue-800 w-24 text-white rounded-sm "
          onClick={closeModal}
        >
          Kembali
        </button>
        <button
          className="p-2 bg-red-600 w-24 text-white rounded-sm "
          onClick={() => handleDelete()}
        >
          Konfirmasi{" "}
        </button>
      </div>
    </div>
  );
};

export default ModalDelete;
