import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Authentication/LoginPage";
import LowonganKerjaPage from "./pages/JobSeeker/LowonganKerjaPage";
import RegisterPage from "./pages/Authentication/RegisterPage";
import CompanyVacancy from "./pages/JobSeeker/CompanyVacancy";
import CreateProfileCompany from "./pages/Employer/CreateProfileCompany";
import DetailLowonganKergaPage from "./pages/JobSeeker/DetailLowonganKergaPage";
import ProfileCompany from "./pages/Employer/ProfileCompany";
import ListUserApplication from "./pages/Employer/ListUserApplication";
import ListJobApplication from "./pages/Employer/ListJobApplication";
import FormJobApplication from "./pages/JobApplication/FormJobApplication";

function App() {
  return (
    <Routes>
      <Route path="/masuk" element={<LoginPage />} />
      <Route path="/daftar" element={<RegisterPage />} />
      <Route path="/" element={<LowonganKerjaPage />} />
      <Route path="/perusahaan" element={<CompanyVacancy />} />
      <Route path="/perusahaan/daftar" element={<CreateProfileCompany />} />
      <Route path="/lowongan-kerja" element={<DetailLowonganKergaPage />} />
      <Route path="/perusahaan/id" element={<ProfileCompany />} />
      <Route
        path="/perusahaan/daftar-pelamar"
        element={<ListUserApplication />}
      />
      <Route
        path="/perusahaan/daftar-lowongan-kerja"
        element={<ListJobApplication />}
      />
      <Route
        path="/perusahaan/daftar-lowongan-kerja/formulir"
        element={<FormJobApplication />}
      />
    </Routes>
  );
}

export default App;
