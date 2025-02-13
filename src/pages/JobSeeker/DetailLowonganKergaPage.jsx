import LayoutJobSeeker from "../../layouts/LayoutJobSeeker";
import { MdSchool, MdWork } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { BsBuilding, BsClock, BsHourglass } from "react-icons/bs";
import CardVacancy from "../../components/common/CardVacancy";

const DetailLowonganKergaPage = () => {
  return (
    <LayoutJobSeeker>
      <div className="flex max-w-7xl mx-auto gap-4">
        <div className="grow-8 shadow-sm rounded-sm p-4">
          <div className="flex gap-5 items-start">
            <img
              src="https://images.glints.com/unsafe/160x0/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/e7f6915d1d2ca480bb839860aa3f0c72.jpeg"
              alt=""
              className="w-32 border "
            />
            <div>
              <h6 className="font-bold text-xl">Nama Lowongan</h6>
              <h6 className="text-blue-500 font-semibold">PT ABC</h6>
              <div className="flex gap-2 items-center mt-6">
                <FaDollarSign />
                <h6>Gaji tidak ditampilkan</h6>
              </div>
              <div className="flex gap-2 items-center my-1">
                <BsBuilding />
                <h6>Gaji tidak ditampilkan</h6>
              </div>
              <div className="flex gap-2 items-center my-1">
                <BsHourglass />
                <h6>Gaji tidak ditampilkan</h6>
              </div>
              <div className="flex gap-2 items-center my-1">
                <MdSchool />
                <h6>Gaji tidak ditampilkan</h6>
              </div>
              <div className="flex gap-2 items-center my-1">
                <MdWork />
                <h6>Gaji tidak ditampilkan</h6>
              </div>
              <div className="flex gap-2 items-center my-1">
                <BsClock />
                <h6>Gaji tidak ditampilkan</h6>
              </div>
              <button className="bg-blue-600 p-2 rounded-sm text-white font-semibold my-2">
                Lamaran Cepat
              </button>
            </div>
          </div>
          <div className="border-t">
            <h2 className="font-bold text-xl my-4">Persyaratan</h2>
            <div className="flex gap-2">
              <div className="p-1 text-sm bg-gray-200 rounded-sm">Sarjana</div>
              <div className="p-1 text-sm bg-gray-200 rounded-sm">
                3-5 Tahun
              </div>
              <div className="p-1 text-sm bg-gray-200 rounded-sm">
                Penuh Waktu
              </div>
              <div className="p-1 text-sm bg-gray-200 rounded-sm">
                Programmer
              </div>
              <div className="p-1 text-sm bg-gray-200 rounded-sm">
                Di Kantor
              </div>
            </div>
            <h2 className="font-bold text-xl my-4">Keahlian</h2>
            <div className="flex gap-2">
              <div className="p-1 text-sm bg-gray-200 rounded-sm">Sarjana</div>
              <div className="p-1 text-sm bg-gray-200 rounded-sm">
                3-5 Tahun
              </div>
              <div className="p-1 text-sm bg-gray-200 rounded-sm">
                Penuh Waktu
              </div>
              <div className="p-1 text-sm bg-gray-200 rounded-sm">
                Programmer
              </div>
              <div className="p-1 text-sm bg-gray-200 rounded-sm">
                Di Kantor
              </div>
            </div>
            <h2 className="font-bold text-xl my-4">Deskripsi Pekerjaan</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <CardVacancy />
          <CardVacancy />
          <CardVacancy />
          <CardVacancy />
        </div>
      </div>
    </LayoutJobSeeker>
  );
};

export default DetailLowonganKergaPage;
