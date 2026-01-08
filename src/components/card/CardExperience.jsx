import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { useModal } from "../../context/ModalContext";
import { useApi } from "../../hooks/useApi";
import { useAuth } from "../../context/AuthContext";
import ModalDelete from "../modal/ModalDelete";

const CardExperience = ({ data, handleDelete }) => {
  const { openModal, closeModal } = useModal();
  const { handleAPI } = useApi();
  const { state } = useAuth();

  const handleDeleteExperience = () => {
    handleAPI({
      url: `${import.meta.env.VITE_API_URL}/experience/${data.id}`,
      method: "DELETE",
      token: state.token,
      handleAction: (response) => {
        handleDelete({ id: response.id, section: "experience" });
      },
      onSuccess: closeModal(),
    });
  };

  return (
    <div className="border rounded-md p-2 border-gray-300 relative">
      <button
        className="absolute top-1 right-1 bg-red-600 p-2 rounded-md"
        onClick={() =>
          openModal(<ModalDelete handleDelete={handleDeleteExperience} />)
        }
      >
        <FaTrash className="text-white" />
      </button>
      <div className=" flex gap-2 items-center">
        <div className="bg-blue-200 p-2 rounded-md">
          <MdWork size={40} className="text-blue-800" />
        </div>
        <div className="">
          <h6 className="font-semibold">
            {data.name_experience} - {data.position}
          </h6>
          <h6 className="text-sm">{data.name_company}</h6>
          <span className="text-sm">
            {new Date(data.date_start).toLocaleDateString()} -{"  "}
            {new Date(data.date_end).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardExperience;
