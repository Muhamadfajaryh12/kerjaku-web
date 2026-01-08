import React from "react";
import FormPengalaman from "../form_component/FormPengalaman";
import SubTitle from "../text/SubTitle";
import CardExperience from "../card/CardExperience";

const PengalamanSection = ({ data, handleDelete, handleAdded }) => {
  return (
    <div>
      <FormPengalaman handleAdded={handleAdded} />
      <SubTitle title={"Pengalaman Anda"} />
      {data?.length > 0 ? (
        <div className="flex flex-col gap-2">
          {data.map((item) => (
            <CardExperience
              key={item.id}
              data={item}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-100 p-4 rounded-md">
          <h1>Anda belum menambahkan Pengalaman </h1>
        </div>
      )}
    </div>
  );
};

export default PengalamanSection;
