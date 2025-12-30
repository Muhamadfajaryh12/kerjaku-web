import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import { useAuth } from "../context/AuthContext";

const LayoutJobSeeker = () => {
  const { state } = useAuth();
  if (state.loading) return <div></div>;
  if (!state.token) return <Navigate to="/login" />;
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
