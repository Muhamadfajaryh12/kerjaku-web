import React from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import FormCompanyProfile from "../../components/form_component/FormCompanyProfile";

const ProfileCompany = () => {
  return (
    <div>
      <BreadCrumb text={["Perusahaan", "Formulir"]} />
      <FormCompanyProfile />
    </div>
  );
};

export default ProfileCompany;
