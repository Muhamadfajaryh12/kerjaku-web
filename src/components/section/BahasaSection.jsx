import React from "react";
import FormBahasa from "../form_component/FormBahasa";
import SubTitle from "../text/SubTitle";
import CardBahasa from "../card/CardBahasa";

const BahasaSection = ({ data, handleDelete, handleAdded }) => {
  return (
    <div>
      <FormBahasa handleAdded={handleAdded} />
      <SubTitle title={"Bahasa Anda"} />
      {data?.length > 0 ? (
        <div className="flex flex-col gap-2">
          {data?.map((item) => (
            <CardBahasa key={item.id} data={item} handleDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-100 p-4 rounded-md">
          <h1>Anda belum memiliki Bahasa </h1>
        </div>
      )}
    </div>
  );
};

export default BahasaSection;
