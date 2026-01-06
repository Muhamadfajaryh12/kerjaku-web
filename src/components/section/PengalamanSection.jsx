import React from "react";
import FormPengalaman from "../form_component/FormPengalaman";
import SubTitle from "../text/SubTitle";
import CardExperience from "../card/CardExperience";

const PengalamanSection = ({ data }) => {
  return (
    <div>
      <FormPengalaman />
      <SubTitle title={"Pengalaman Anda"} />
      <div className="flex flex-col gap-2">
        {data?.length > 0 &&
          data.map((item) => <CardExperience key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default PengalamanSection;
