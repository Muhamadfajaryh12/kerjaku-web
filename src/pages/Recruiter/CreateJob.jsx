import React from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import FormJob from "../../components/form_component/FormJob";

const CreateJob = () => {
  return (
    <div>
      <BreadCrumb text={["Lowongan Pekerjaan", "Formulir"]} />
      <FormJob />
    </div>
  );
};

export default CreateJob;
