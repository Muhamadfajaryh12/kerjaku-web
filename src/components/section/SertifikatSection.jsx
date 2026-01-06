import React from "react";
import FormSertifikasi from "../form_component/FormSertifikasi";
import CardSertifikat from "../card/CardSertifikat";
import SubTitle from "../text/SubTitle";

const SertifikatSection = ({ data }) => {
  return (
    <div>
      <FormSertifikasi />
      <SubTitle title={"Sertifikat Anda"} />
      <div className="flex flex-col gap-2">
        {data?.length > 0 &&
          data?.map((item) => <CardSertifikat key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default SertifikatSection;
