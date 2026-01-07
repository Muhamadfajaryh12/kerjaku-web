import FormPendidikan from "../form_component/FormPendidikan";
import SubTitle from "../text/SubTitle";
import CardEducation from "../card/CardEducation";

const PendidikanSection = ({ data, handleDelete, handleAdded }) => {
  console.log(data);
  return (
    <div>
      <FormPendidikan handleAdded={handleAdded} />
      <SubTitle title={"Pendidikan Anda"} />
      <div className="flex flex-col gap-4">
        {data.map((item) => (
          <CardEducation
            key={item.id}
            data={item}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default PendidikanSection;
