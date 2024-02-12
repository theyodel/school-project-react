import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import StudentsPage from "./pages/for-students/StudentsPage.tsx";
import ReconcilPage from "./pages/for-students/reconciliation-service/ReconcilPage.tsx";
import ParentsPage from "./pages/for-parents/ParentsPage.tsx";
import OrksePage from "./pages/for-parents/ORKSE/OrksePage.tsx";
import DonatesPage from "./pages/for-parents/about-donates/DonatesPage.tsx";
import FormsPage from "./pages/for-parents/application-forms/FormsPage.tsx";
import OlympiadPage from "./pages/allrussian-olympiad/OlympiadPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/site-map" element={<MapPage />} />
        <Route path="/helpful-links" element={<LinksPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/feedback/faq" element={<FaqPage />} />
        <Route path="/feedback/status/" element={<FeedbackStatusPage />} />
        <Route path="/school-food" element={<SchoolfoodPage />} />
        <Route path="/basic-information" element={<BasicinformationPage />} />
        <Route
          path="/basic-information/school-history"
          element={<SchoolhistoryPage />}
        />
        <Route
          path="/basic-information/structure-and-management"
          element={<StructureandmanagementPage />}
        />
        <Route
          path="/basic-information/education"
          element={<EducationPage />}
        />
        <Route path="/basic-information/staff" element={<StaffPage />} />
        <Route
          path="/basic-information/technical-equipment"
          element={<EquipmentPage />}
        />
        <Route
          path="/basic-information/technical-equipment/dnevnik.ru"
          element={<DnevnikruPage />}
        />
        <Route
          path="/basic-information/support-measures"
          element={<ScholarshipPage />}
        />
        <Route
          path="/basic-information/vacancies"
          element={<VacanciesPage />}
        />
        <Route
          path="/basic-information/available-environment"
          element={<EnvironmentPage />}
        />
        <Route path="/for-students" element={<StudentsPage />} />
        <Route
          path="/for-students/reconciliation-service"
          element={<ReconcilPage />}
        />
        <Route path="/for-parents" element={<ParentsPage />} />
        <Route path="/for-parents/ORKSE" element={<OrksePage />} />
        <Route path="/for-parents/about-donates" element={<DonatesPage />} />
        <Route path="/for-parents/application-forms" element={<FormsPage />} />
        <Route path="/allrussian-olympiad" element={<OlympiadPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
