import TextInput from "../../components/form_component/TextInput";
import ButtonPrimary from "../../components/form_component/ButtonPrimary";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useApi } from "../../hooks/useApi";
const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const { handleAPI } = useApi();
  const handleRegister = (data) => {
    handleAPI({
      url: `${import.meta.env.VITE_API_URL}/register`,
      method: "POST",
      data: data,
    });
    console.log(data);
  };
  return (
    <div>
      <div className="w-96  border border-gray-300 rounded-lg shadow-sm p-4">
        <h2 className="font-bold text-4xl text-blue-700 text-center">
          Kerja<span className="text-yellow-400">Ku.</span>
        </h2>
        <p className="font-semibold text-sm mt-4">
          Silahkan daftar terlebih dahulu
        </p>
        <form className="my-4" onSubmit={handleSubmit(handleRegister)}>
          <TextInput
            name="email"
            type={"text"}
            title={"Email"}
            {...register("email")}
          />
          <TextInput
            name={"password"}
            type={"password"}
            title={"Kata Sandi"}
            {...register("password")}
          />
          <label
            htmlFor=""
            className="block text-sm text-gray-800 font-semibold"
          >
            Mendaftar sebagai
          </label>
          <div className="block my-1 ">
            <input
              type="radio"
              value="perusahaan"
              name="role"
              {...register("role")}
            />
            <label htmlFor="" className="mx-1">
              Perusahaan
            </label>
          </div>
          <div className="block my-1 ">
            <input
              type="radio"
              value="pencaker"
              name="role"
              {...register("role")}
            />

            <label htmlFor="" className="mx-1">
              Pencaker
            </label>
          </div>
          <ButtonPrimary title={"masuk"} type="submit" />
        </form>

        <p className="text-sm my-2 text-center">
          Sudah memiliki akun?
          <Link to={"/login"} className="text-blue-500 font-bold">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
