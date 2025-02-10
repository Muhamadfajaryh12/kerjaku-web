const CardVacancy = () => {
  return (
    <div className="shadow-md border border-gray-50 rounded-md h-56 p-2 text-sm hover:shadow-lg hover:cursor-pointer">
      <div className="flex justify-between ">
        <h6 className="font-bold">Nama Pekerjaan</h6>
        <h6 className="text-gray-400 font-semibold">Gaji tidak ditampilkan</h6>
      </div>
      <div className="flex flex-wrap gap-2  mt-2">
        <div className="p-2 bg-gray-200 rounded-sm">Sarjana</div>
        <div className="p-2 bg-gray-200 rounded-sm">3-5 Tahun</div>
        <div className="p-2 bg-gray-200 rounded-sm">Penuh Waktu</div>
        <div className="p-2 bg-gray-200 rounded-sm">Programmer</div>
        <div className="p-2 bg-gray-200 rounded-sm">Di Kantor</div>
      </div>
      <div className="mt-2">
        <h6 className="text-blue-400">Pembuka Lowongan</h6>
        <h6 className="">Karawang, Jawa Barat</h6>
      </div>
      <div className="border-t my-2 ">
        <h6 className="text-green-900 font-semibold mt-2">12 jam yang lalu</h6>
      </div>
    </div>
  );
};

export default CardVacancy;
