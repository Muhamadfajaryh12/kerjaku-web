import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { useModal } from "../../context/ModalContext";
import { useAuth } from "../../context/AuthContext";
import { useApi } from "../../hooks/useApi";
import ModalDelete from "../modal/ModalDelete";

const CardBahasa = ({ data, handleDelete, isDelete = false }) => {
  const { closeModal, openModal } = useModal();
  const { state } = useAuth();
  const { handleAPI } = useApi();

  const handleDeleteLanguage = () => {
    handleAPI({
      url: `${import.meta.env.VITE_API_URL}/language/${data.id}`,
      token: state.token,
      method: "DELETE",
      handleAction: (response) => {
        handleDelete({ id: response.id, section: "language" });
      },
      onSuccess: closeModal(),
    });
  };

  return (
    <div className="border rounded-md p-2 border-gray-300 relative">
      {isDelete && (
        <button
          className="absolute top-1 right-1 bg-red-600 p-2 rounded-md"
          onClick={() =>
            openModal(<ModalDelete handleDelete={handleDeleteLanguage} />)
          }
        >
          <FaTrash className="text-white" />
        </button>
      )}
      <div className=" flex gap-2 items-start">
        <div className="bg-blue-200 p-2 rounded-md">
          <MdCastForEducation size={40} className="text-blue-800" />
        </div>
        <div className="">
          <h6 className="font-semibold">{data?.language}</h6>
          <h6 className="text-sm">{data?.level}</h6>
        </div>
      </div>
    </div>
  );
};

export default CardBahasa;
