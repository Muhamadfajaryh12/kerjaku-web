import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Dropdown = ({ open, setOpen }) => {
  const { Logout } = useAuth();
  return (
    <div
      className={`${
        open ? "absolute" : "hidden"
      } bg-white border border-gray-200 right-8 `}
      onClick={() => setOpen(false)}
    >
      <ul>
        <li className="w-36 p-2 hover:bg-gray-100">
          <Link to={"/profile"} className="flex gap-2 items-center">
            <FaUser /> <span>Profile</span>
          </Link>
        </li>
        <li className="w-36 p-2 hover:bg-gray-100">
          <Link to={"/profile"}> Lihat Lamaran</Link>
        </li>
        <li className="w-36 p-2 hover:bg-gray-100">
          <button className="flex gap-2 items-center" onClick={Logout}>
            <MdLogout />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
