import { BsBuilding } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdLogout, MdWork } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const dataNavigation = [
  {
    name: "Lowongan Pekerjaan",
    link: "/recruiter/job",
    icon: <MdWork size={20} />,
  },
  {
    name: "Profil Perusahaan",
    link: "/recruiter/job/form",
    icon: <BsBuilding size={20} />,
  },
];
const SidebarEmployer = () => {
  const path = useLocation();

  return (
    <div className="w-72 mih-h-screen shadow-sm p-4">
      <div>
        {dataNavigation.map((item, index) => (
          <Link to={item.link} key={index}>
            <div
              className={`p-2 my-2 text-sm rounded-sm flex gap-2 items-center ${
                item.link == path.pathname ? "bg-blue-800 text-white" : ""
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarEmployer;
