import React from "react";
import FormBahasa from "../form_component/FormBahasa";
import SubTitle from "../text/SubTitle";
import CardBahasa from "../card/CardBahasa";

const BahasaSection = ({ data }) => {
  return (
    <div>
      <FormBahasa />
      <SubTitle title={"Bahasa Anda"} />
      <div className="flex flex-col gap-2">
        {data?.length > 0 &&
          data?.map((item) => <CardBahasa key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default BahasaSection;
