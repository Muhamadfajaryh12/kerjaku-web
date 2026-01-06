import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const params = useLocation();
  const dataLink = [
    {
      name: "Lowongan Kerja",
      link: "/",
    },
    {
      name: "Perusahaan",
      link: "/perusahaan",
    },
  ];
  const { state } = useAuth();
  return (
    <div className="w-full border border-gray-200 p-4 shadow-sm">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <h2 className="font-bold text-3xl text-blue-700 text-center">
            Kerja<span className="text-yellow-400">Ku.</span>
          </h2>
          {dataLink.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`font-semibold ${
                item.link == params.pathname
                  ? "underline underline-offset-8"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {state.token ? (
          <div>
            <button>Logout </button>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Link to={"/login"}>Masuk</Link>
            <Link
              to={"/perusahaan/daftar"}
              className="border-2 border-blue-500 p-2 uppercase rounded-sm font-semibold text-blue-500 text-xs hover:text-white hover:bg-blue-500"
            >
              Untuk Perusahaan
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
