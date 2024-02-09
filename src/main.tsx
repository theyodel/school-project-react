import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// CSS
import "../public/css/style.css";
import "../public/css/main.css";
import "../public/css/form.css";

// Pages
import IndexPage from "./pages/index/IndexPage.tsx";
import MapPage from "./pages/site-map/MapPage.tsx";
import LinksPage from "./pages/helpful-links/LinksPage.tsx";
import FeedbackPage from "./pages/feedback/FeedbackPage.tsx";
import FaqPage from "./pages/feedback/faq/FaqPage.tsx";
import FeedbackStatusPage from "./pages/feedback/status/FeedbackStatusPage.tsx";
import SchoolfoodPage from "./pages/school-food/SchoolfoodPage.tsx";
import BasicinformationPage from "./pages/basic-information/BasicinformationPage.tsx";
import SchoolhistoryPage from "./pages/basic-information/school-history/SchoolhistoryPage.tsx";
import StructureandmanagementPage from "./pages/basic-information/structure-and-management/StructureandmanagementPage.tsx";
import EducationPage from "./pages/basic-information/education/EducationPage.tsx";
import StaffPage from "./pages/basic-information/staff/StaffPage.tsx";
import EquipmentPage from "./pages/basic-information/technical-equipment/EquipmentPage.tsx";
import DnevnikruPage from "./pages/basic-information/technical-equipment/dnevnik.ru/DnevnikruPage.tsx";
import ScholarshipPage from "./pages/basic-information/support-measures/ScholarshipPage.tsx";
import VacanciesPage from "./pages/basic-information/vacancies/VacanciesPage.tsx";
import EnvironmentPage from "./pages/basic-information/available-environment/EnvironmentPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/site-map",
    element: <MapPage />,
  },
  {
    path: "/helpful-links",
    element: <LinksPage />,
  },
  {
    path: "/feedback",
    element: <FeedbackPage />,
  },
  {
    path: "/feedback/faq",
    element: <FaqPage />,
  },
  {
    path: "/feedback/status",
    element: <FeedbackStatusPage />,
  },
  {
    path: "/school-food",
    element: <SchoolfoodPage />,
  },
  {
    path: "/basic-information",
    element: <BasicinformationPage />,
  },
  {
    path: "/basic-information/school-history",
    element: <SchoolhistoryPage />,
  },
  {
    path: "/basic-information/structure-and-management",
    element: <StructureandmanagementPage />,
  },
  {
    path: "/basic-information/education",
    element: <EducationPage />,
  },
  {
    path: "/basic-information/staff",
    element: <StaffPage />,
  },
  {
    path: "/basic-information/technical-equipment",
    element: <EquipmentPage />,
  },
  {
    path: "/basic-information/technical-equipment/dnevnik.ru",
    element: <DnevnikruPage />,
  },
  {
    path: "/basic-information/support-measures",
    element: <ScholarshipPage />,
  },
  {
    path: "/basic-information/vacancies",
    element: <VacanciesPage />,
  },
  {
    path: "/basic-information/available-environment",
    element: <EnvironmentPage />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
