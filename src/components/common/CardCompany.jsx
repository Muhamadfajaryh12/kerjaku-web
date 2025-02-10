import { FaBuilding } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const CardCompany = () => {
  return (
    <div className="border border-gray-100 shadow-md h-42 rounded-md p-2 hover:shadow-lg hover:cursor-pointer">
      <div className="flex items-center gap-4">
        <img
          src="https://images.glints.com/unsafe/60x0/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/846a02a64416cc99ca86c2ba3508d2f8.jpg"
          alt=""
          className="size-24"
        />
        <div>
          <h6 className="font-bold">PT. Century Batteries Indonesia</h6>
          <h6 className="font-semibold">Karawang</h6>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <FaBuilding className="text-gray-500" />
          <p className="text-sm font-semibold">Manufacturing Otomotif</p>
        </div>
        <div className="flex gap-2 items-center">
          <MdWork className="text-gray-500" />
          <p className="text-sm text-blue-600 font-semibold">3 Lowongan</p>
        </div>
      </div>
    </div>
  );
};

export default CardCompany;
