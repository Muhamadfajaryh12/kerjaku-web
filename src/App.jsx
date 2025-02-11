import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Authentication/LoginPage";
import LowonganKerjaPage from "./pages/JobSeeker/LowonganKerjaPage";
import RegisterPage from "./pages/Authentication/RegisterPage";
import CompanyVacancy from "./pages/JobSeeker/CompanyVacancy";
import CreateProfileCompany from "./pages/Employer/CreateProfileCompany";

function App() {
  return (
    <Routes>
      <Route path="/masuk" element={<LoginPage />} />
      <Route path="/daftar" element={<RegisterPage />} />
      <Route path="/" element={<LowonganKerjaPage />} />
      <Route path="/perusahaan" element={<CompanyVacancy />} />
      <Route path="/perusahaan/daftar" element={<CreateProfileCompany />} />
    </Routes>
  );
}

export default App;
