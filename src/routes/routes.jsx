import { createBrowserRouter } from "react-router-dom";
import LayoutJobSeeker from "../layouts/LayoutJobSeeker";
import LowonganKerjaPage from "../pages/JobSeeker/LowonganKerjaPage";
import DetailLowonganKergaPage from "../pages/JobSeeker/DetailLowonganKergaPage";
import CompanyVacancy from "../pages/JobSeeker/CompanyVacancy";
import ProfileJobSeeker from "../pages/JobSeeker/ProfileJobSeeker";
import LayoutEmployer from "../layouts/LayoutEmployer";
import ListJobApplication from "../pages/Recruiter/ListJobApplication";
import DetailJobApplication from "../pages/Recruiter/DetailJobApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutJobSeeker />,
    children: [
      {
        index: true,
        element: <LowonganKerjaPage />,
      },
      {
        path: "lowongan-kerja",
        element: <DetailLowonganKergaPage />,
      },
      {
        path: "perusahaan",
        element: <CompanyVacancy />,
      },
      {
        path: "profile",
        element: <ProfileJobSeeker />,
      },
    ],
  },
  {
    path: "recruiter",
    element: <LayoutEmployer />,
    children: [
      {
        index: true,
        element: <ListJobApplication />,
      },
      {
        path: "application/user",
        element: <DetailJobApplication />,
      },
    ],
  },
]);

export default router;
