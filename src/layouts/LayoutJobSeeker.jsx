import Navbar from "../components/navigation/Navbar";

const LayoutJobSeeker = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-2 m-2">{children}</div>
    </div>
  );
};

export default LayoutJobSeeker;
