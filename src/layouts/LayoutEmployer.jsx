import NavbarEmployer from "../components/navigation/Employer/NavbarEmployer";
import SidebarEmployer from "../components/navigation/Employer/SidebarEmployer";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LayoutEmployer = () => {
  const { state } = useAuth();
  if (state.loading) return <div>Loading</div>;
  if (!state.token) return <Navigate to="/login" />;
  console.log(state);
  return (
    <div className="w-screen min-h-screen flex">
      <SidebarEmployer />
      <div className="w-full">
        <NavbarEmployer />
        <div className="max-w-7xl w-full  p-2  mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutEmployer;
