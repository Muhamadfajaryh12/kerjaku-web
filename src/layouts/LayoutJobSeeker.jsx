import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";

const LayoutJobSeeker = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-2 m-2">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutJobSeeker;
