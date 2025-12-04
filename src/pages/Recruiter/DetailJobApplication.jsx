import React from "react";
import SubTitle from "../../components/text/SubTitle";
import CardEducation from "../../components/card/CardEducation";
import CardExperience from "../../components/card/CardExperience";
import CardSertifikat from "../../components/card/CardSertifikat";

const DetailJobApplication = () => {
  return (
    <div>
      <section className="flex gap-8">
        <div className="w-48 h-48 bg-gray-500"></div>
        <div className="max-w-3xl">
          <h1 className="font-bold text-xl">Nama Pekerja</h1>
          <h6>Email@gmail.com</h6>
          <h6>Karawang,JL 12</h6>
          <h6>0896715159595</h6>
          <h6 className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            alias in fugit reprehenderit sint, assumenda vero eaque quisquam
            aspernatur, repellat ex illo consectetur. Impedit cum amet
            accusantium necessitatibus nemo iure rerum eum repudiandae ratione
            tenetur ducimus deserunt, quibusdam provident natus architecto
            perferendis quod! Non tenetur inventore ad. Animi, voluptates
            laudantium?
          </h6>
        </div>
      </section>
      <section>
        <SubTitle title={"Pendidikan"} />
        <div className="flex flex-col">
          <CardEducation />
        </div>
      </section>
      <section>
        <SubTitle title={"Pengalaman"} />
        <div className="flex flex-col">
          <CardExperience />
        </div>
      </section>
      <section>
        <SubTitle title={"Sertifikasi"} />
        <div className="flex flex-col">
          <CardSertifikat />
        </div>
      </section>
      <section>
        <SubTitle title={"Keterampilan"} />
        <div className="flex flex-col">
          <CardExperience />
        </div>
      </section>
      <section>
        <SubTitle title={"Bahasa"} />
        <div className="flex flex-col">
          <CardExperience />
        </div>
      </section>
      <button className="">Kembali</button>
    </div>
  );
};

export default DetailJobApplication;
