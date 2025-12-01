import { createBrowserRouter } from "react-router-dom";
import LayoutJobSeeker from "../layouts/LayoutJobSeeker";
import LowonganKerjaPage from "../pages/JobSeeker/LowonganKerjaPage";
import DetailLowonganKergaPage from "../pages/JobSeeker/DetailLowonganKergaPage";
import CompanyVacancy from "../pages/JobSeeker/CompanyVacancy";

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
    ],
  },
]);

export default router;
