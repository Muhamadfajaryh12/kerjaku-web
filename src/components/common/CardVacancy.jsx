import { BsPencil, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCurrency } from "../../hooks/useCurrency";

const CardVacancy = ({ data }) => {
  return (
    <Link to={`/lowongan-kerja/${data?.id}`}>
      <div className="shadow-md border border-gray-50 rounded-md h-56 p-2 text-sm hover:shadow-lg hover:cursor-pointer">
        <div className="flex justify-between ">
          <h6 className="font-bold">{data?.name_vacancy}</h6>
          <h6 className="text-gray-400 font-semibold">
            {useCurrency(data?.salary)}
          </h6>
        </div>
        <div className="flex flex-wrap gap-2  mt-2">
          <div className="p-2 bg-gray-200 rounded-sm">{data?.education}</div>
          <div className="p-2 bg-gray-200 rounded-sm">{data?.experience}</div>
          <div className="p-2 bg-gray-200 rounded-sm">{data?.type}</div>
          <div className="p-2 bg-gray-200 rounded-sm">{data?.category}</div>
          <div className="p-2 bg-gray-200 rounded-sm">Di Kantor</div>
        </div>
        <div className="mt-2">
          <h6 className="text-blue-400">{data?.company_name}</h6>
          <h6 className="">{data?.location}</h6>
        </div>
        <div className="border-t my-2 flex justify-between items-center ">
          <h6 className="text-green-900 font-semibold mt-2">
            12 jam yang lalu
          </h6>
        </div>
      </div>
    </Link>
  );
};

export default CardVacancy;
