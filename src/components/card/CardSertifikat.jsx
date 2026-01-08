import React from "react";
import { FaCertificate, FaTrash } from "react-icons/fa";
import { useModal } from "../../context/ModalContext";
import { useApi } from "../../hooks/useApi";
import { useAuth } from "../../context/AuthContext";
import ModalDelete from "../modal/ModalDelete";

const CardSertifikat = ({ data, handleDelete }) => {
  const { openModal, closeModal } = useModal();
  const { handleAPI } = useApi();
  const { state } = useAuth();
  const handleDeleteCertification = () => {
    handleAPI({
      url: `${import.meta.env.VITE_API_URL}/certification/${data.id}`,
      method: "DELETE",
      token: state.token,
      handleAction: (response) => {
        handleDelete({ id: response.id, section: "certification" });
      },
      onSuccess: closeModal(),
    });
  };
  return (
    <div className="border rounded-md p-2 border-gray-300 relative">
      <button
        className="absolute top-1 right-1 bg-red-600 p-2 rounded-md"
        onClick={() =>
          openModal(<ModalDelete handleDelete={handleDeleteCertification} />)
        }
      >
        <FaTrash className="text-white" />
      </button>
      <div className=" flex gap-4 items-center">
        <div className="bg-blue-200 p-4 rounded-md">
          <FaCertificate size={30} className="text-blue-800" />
        </div>
        <div className="">
          <h6 className="font-semibold">{data?.certification_name}</h6>
          <h6 className="text-sm">{data?.publisher}</h6>
          <span className="text-sm">
            Berlaku sampai {new Date(data?.effective_date).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardSertifikat;
