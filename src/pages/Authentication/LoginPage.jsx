import TextInput from "../../components/form_component/TextInput";
import ButtonPrimary from "../../components/form_component/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useApi } from "../../hooks/useApi";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { handleAPI } = useApi();
  const { saveToken } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (value) => {
    handleAPI({
      url: `${import.meta.env.VITE_API_URL}/login`,
      method: "POST",
      data: value,
      handleAction: (response) => {
        console.log(response);
        !response.is_complete ? navigate("/profile") : navigate("/");
        saveToken(response.token);
      },
    });
  };

  return (
    <div>
      <div className="w-96 h-96 border border-gray-300 rounded-lg shadow-sm p-4">
        <h2 className="font-bold text-4xl text-blue-700 text-center">
          Kerja<span className="text-yellow-400">Ku.</span>
        </h2>
        <p className="font-semibold text-sm mt-4">
          Silahkan masuk terlebih dahulu
        </p>
        <form className="my-4" onSubmit={handleSubmit(handleLogin)}>
          <TextInput
            name="email"
            type={"text"}
            title={"Email"}
            {...register("email")}
          />
          <TextInput
            name="password"
            type={"password"}
            title={"Kata Sandi"}
            {...register("password")}
          />
          <ButtonPrimary title={"masuk"} type="submit" />
        </form>

        <p className="text-sm my-2 text-center">
          Belum memiliki akun?{" "}
          <Link to={"/register"} className="text-blue-500 font-bold">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
