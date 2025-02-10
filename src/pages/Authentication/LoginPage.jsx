import TextInput from "../../components/form_component/TextInput";
import ButtonPrimary from "../../components/form_component/ButtonPrimary";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-96 h-96 border border-gray-300 rounded-lg shadow-sm p-4">
        <h2 className="font-bold text-4xl text-blue-700 text-center">
          Kerja<span className="text-yellow-400">Ku.</span>
        </h2>
        <p className="font-semibold text-sm mt-4">
          Silahkan masuk terlebih dahulu
        </p>
        <form className="my-4">
          <TextInput type={"text"} title={"Email"} />
          <TextInput type={"password"} title={"Kata Sandi"} />
          <ButtonPrimary title={"masuk"} />
        </form>

        <p className="text-sm my-2 text-center">
          Belum memiliki akun?{" "}
          <Link to={"/daftar"} className="text-blue-500 font-bold">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
