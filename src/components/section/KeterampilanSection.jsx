import FormKeterampilan from "../form_component/FormKeterampilan";
import SubTitle from "../text/SubTitle";
import { MdClose } from "react-icons/md";
import { useAuth } from "../../context/AuthContext";
import { useApi } from "../../hooks/useApi";

const KeterampilanSection = ({ data, handleAdded, handleDelete }) => {
  const { state } = useAuth();
  const { handleAPI } = useApi();
  const handleDeleteSkill = (id) => {
    handleAPI({
      url: `${import.meta.env.VITE_API_URL}/skill/${id}`,
      method: "DELETE",
      token: state.token,
      handleAction: (response) => {
        handleDelete({ id: response.id, section: "skill" });
      },
    });
  };
  return (
    <div>
      <FormKeterampilan handleAdded={handleAdded} />
      <SubTitle title={"Keterampilan Anda"} />
      {data?.length > 0 ? (
        <div className="flex gap-2">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-2 rounded-sm border border-gray-300 flex gap-2 items-center "
            >
              <p className="font-semibold">{item.skill}</p>
              <button
                className="rounded-md bg-red-500 text-white p-2"
                onClick={() => handleDeleteSkill(item.id)}
              >
                <MdClose />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-100 p-4 rounded-md">
          <h1>Anda belum memiliki Keterampilan </h1>
        </div>
      )}
    </div>
  );
};

export default KeterampilanSection;
