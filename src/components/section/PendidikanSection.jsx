import FormPendidikan from "../form_component/FormPendidikan";
import SubTitle from "../text/SubTitle";
import CardEducation from "../card/CardEducation";

const PendidikanSection = ({ data }) => {
  console.log(data);
  return (
    <div>
      <FormPendidikan />
      <SubTitle title={"Pendidikan Anda"} />
      <div className="flex flex-col gap-4">
        {data.map((item) => (
          <CardEducation key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default PendidikanSection;
