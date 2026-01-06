import React from "react";
import FormKeterampilan from "../form_component/FormKeterampilan";
import SubTitle from "../text/SubTitle";
import { MdClose } from "react-icons/md";

const KeterampilanSection = ({ data }) => {
  return (
    <div>
      <FormKeterampilan />
      <SubTitle title={"Keterampilan Anda"} />
      <div className="flex gap-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-2 rounded-sm border border-gray-300 flex gap-2 items-center "
          >
            <p className="font-semibold">{item.skill}</p>
            <button className="rounded-md bg-red-500 text-white p-2">
              <MdClose />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeterampilanSection;
