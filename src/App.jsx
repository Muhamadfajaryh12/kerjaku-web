import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Authentication/LoginPage";
import LowonganKerjaPage from "./pages/JobSeeker/LowonganKerjaPage";
import RegisterPage from "./pages/Authentication/RegisterPage";
import CompanyVacancy from "./pages/JobSeeker/CompanyVacancy";

function App() {
  return (
    <Routes>
      <Route path="/masuk" element={<LoginPage />} />
      <Route path="/daftar" element={<RegisterPage />} />
      <Route path="/" element={<LowonganKerjaPage />} />
      <Route path="/perusahaan" element={<CompanyVacancy />} />
    </Routes>
  );
}

export default App;
