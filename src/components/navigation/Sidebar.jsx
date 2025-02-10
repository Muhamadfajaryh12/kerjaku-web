import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Sidebar = () => {
  const [prioritas, setPrioritas] = useState(true);
  const [open, setOpen] = useState([]);
  const dataTipePekerjaan = [
    {
      name: "Magang",
    },
    {
      name: "Penuh Waktu",
    },
    {
      name: "Setengah Waktu",
    },
    {
      name: "Freelance",
    },
  ];

  const dataKebijakanKerja = [
    {
      name: "Dari Rumah",
    },
    {
      name: "Di kantor",
    },
    {
      name: "Gabungan",
    },
  ];

  const dataPengalaman = [
    {
      name: "Tidak Berpengalaman",
    },
    {
      name: "Freshgraduate",
    },
    {
      name: "Kurang dari 1 tahun",
    },
    {
      name: "Pengalaman 1-3 tahun",
    },
    {
      name: "Pengalaman 3-5 tahun",
    },
    {
      name: "Pengalaman lebih dari 5 tahun",
    },
  ];

  const dataPendidikan = [
    {
      name: "Magister",
    },
    {
      name: "Sarjana / Diploma 4",
    },
    {
      name: "Diploma 1-3",
    },
    {
      name: "SMA",
    },
    {
      name: "SMP",
    },
    {
      name: "SD",
    },
  ];

  const handlePrioritas = () => {
    setPrioritas((prev) => !prev);
  };

  const handleToggle = (param) => {
    if (open.includes(param)) {
      setOpen(open.filter((item) => item !== param));
    } else {
      setOpen([...open, param]);
    }
  };

  return (
    <div className="border border-gray-300 p-4 mt-2 rounded-sm w-96">
      <div className="my-2 ">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold my-2">Prioritaskan</h2>
          {open.includes("prioritas") ? (
            <MdKeyboardArrowDown
              size={30}
              onClick={() => handleToggle("prioritas")}
            />
          ) : (
            <MdKeyboardArrowUp
              size={30}
              onClick={() => handleToggle("prioritas")}
            />
          )}
        </div>
        <div
          className={`flex gap-2 ${
            open.includes("prioritas") ? "hidden" : "block"
          }`}
        >
          <button
            className={`rounded-full p-2  text-xs ${
              prioritas
                ? "bg-blue-200 text-blue-800 border-2 border-blue-800 font-semibold"
                : "bg-gray-200 text-black"
            }`}
            onClick={handlePrioritas}
            type="button"
          >
            Baru ditambahkan
          </button>
          <button
            className={`rounded-full p-2  text-xs ${
              !prioritas
                ? "bg-blue-200 text-blue-800 border-2 border-blue-800 font-semibold"
                : "bg-gray-200 text-black"
            }`}
            onClick={handlePrioritas}
            type="button"
          >
            Terlama ditambahkan
          </button>
        </div>
      </div>
      <div className="my-2 border-t">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold my-2">Tipe Pekerjaan</h2>
          {open.includes("tipe-pekerjaan") ? (
            <MdKeyboardArrowDown
              size={30}
              onClick={() => handleToggle("tipe-pekerjaan")}
            />
          ) : (
            <MdKeyboardArrowUp
              size={30}
              onClick={() => handleToggle("tipe-pekerjaan")}
            />
          )}
        </div>
        <div
          className={`${open.includes("tipe-pekerjaan") ? "hidden" : "block"}`}
        >
          {dataTipePekerjaan.map((item, index) => (
            <div key={index} className="flex gap-2 items-center my-1 text-sm">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">{item.name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="my-2 border-t">
        <div className="flex justify-between">
          <h2 className="text-sm font-semibold my-2">Kebijakan Kerja</h2>
          {open.includes("kebijakan-kerja") ? (
            <MdKeyboardArrowDown
              size={30}
              onClick={() => handleToggle("kebijakan-kerja")}
            />
          ) : (
            <MdKeyboardArrowUp
              size={30}
              onClick={() => handleToggle("kebijakan-kerja")}
            />
          )}
        </div>
        <div
          className={`${open.includes("kebijakan-kerja") ? "hidden" : "block"}`}
        >
          {dataKebijakanKerja.map((item, index) => (
            <div key={index} className="flex gap-2 items-center my-1 text-sm">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">{item.name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="my-2 border-t">
        <div className="flex justify-between">
          <h2 className="text-sm font-semibold my-2">Pengalaman</h2>
          {open.includes("pengalaman") ? (
            <MdKeyboardArrowDown
              size={30}
              onClick={() => handleToggle("pengalaman")}
            />
          ) : (
            <MdKeyboardArrowUp
              size={30}
              onClick={() => handleToggle("pengalaman")}
            />
          )}
        </div>
        <div className={`${open.includes("pengalaman") ? "hidden" : "block"}`}>
          {dataPengalaman.map((item, index) => (
            <div key={index} className="flex gap-2 items-center my-1 text-sm">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">{item.name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="my-2 border-t">
        <div className="flex justify-between">
          <h2 className="text-sm font-semibold my-2">Pendidikan</h2>
          {open.includes("pendidikan") ? (
            <MdKeyboardArrowDown
              size={30}
              onClick={() => handleToggle("pendidikan")}
            />
          ) : (
            <MdKeyboardArrowUp
              size={30}
              onClick={() => handleToggle("pendidikan")}
            />
          )}
        </div>
        <div className={`${open.includes("pendidikan") ? "hidden" : "block"}`}>
          {dataPendidikan.map((item, index) => (
            <div key={index} className="flex gap-2 items-center my-1 text-sm">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">{item.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
