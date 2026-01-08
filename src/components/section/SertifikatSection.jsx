import React from "react";
import FormSertifikasi from "../form_component/FormSertifikasi";
import CardSertifikat from "../card/CardSertifikat";
import SubTitle from "../text/SubTitle";

const SertifikatSection = ({ data, handleDelete, handleAdded }) => {
  return (
    <div>
      <FormSertifikasi handleAdded={handleAdded} />
      <SubTitle title={"Sertifikat Anda"} />
      {data?.length > 0 ? (
        <div className="flex flex-col gap-2">
          {data?.map((item) => (
            <CardSertifikat
              key={item.id}
              data={item}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-100 p-4 rounded-md">
          <h1>Anda belum menambahkan Sertifikat </h1>
        </div>
      )}
    </div>
  );
};

export default SertifikatSection;
