import { createBrowserRouter } from "react-router-dom";
import LayoutJobSeeker from "../layouts/LayoutJobSeeker";
import LowonganKerjaPage from "../pages/JobSeeker/LowonganKerjaPage";
import DetailLowonganKergaPage from "../pages/JobSeeker/DetailLowonganKergaPage";
import CompanyVacancy from "../pages/JobSeeker/CompanyVacancy";
import ProfileJobSeeker from "../pages/JobSeeker/ProfileJobSeeker";
import LayoutEmployer from "../layouts/LayoutEmployer";
import ListJobApplication from "../pages/Recruiter/ListJobApplication";
import DetailJobApplication from "../pages/Recruiter/DetailJobApplication";
import LoginPage from "../pages/Authentication/LoginPage";
import RegisterPage from "../pages/Authentication/RegisterPage";
import CreateJob from "../pages/Recruiter/CreateJob";
import JobVacancyRecruiter from "../pages/Recruiter/JobVacancyRecruiter";
import ListApplicant from "../pages/Recruiter/Applicant/ListApplicant";
import ProfileCompany from "../pages/Recruiter/ProfileCompany";
import AuthenticationLayout from "../layouts/AuthenticationLayout";

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
        path: "lowongan-kerja/:id",
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
      {
        path: "job",
        element: <JobVacancyRecruiter />,
      },
      {
        path: "job/form",
        element: <CreateJob />,
      },
      {
        path: "job/applicant",
        element: <ListApplicant />,
      },
      {
        path: "company/form",
        element: <ProfileCompany />,
      },
    ],
  },
  {
    path: "login",
    element: <AuthenticationLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "register",
    element: <AuthenticationLayout />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
