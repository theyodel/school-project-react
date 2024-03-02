import { Routes, Route } from "react-router-dom";

// Pages
import IndexPage from "./pages/index/IndexPage";
import MapPage from "./pages/site-map/MapPage";
import SchoolfoodPage from "./pages/school-food/SchoolfoodPage";
import LinksPage from "./pages/helpful-links/LinksPage";
import BasicinformationPage from "./pages/basic-information/BasicinformationPage";
import SchoolhistoryPage from "./pages/basic-information/school-history/SchoolhistoryPage";
import StructureandmanagementPage from "./pages/basic-information/structure-and-management/StructureandmanagementPage";
import DocumentsPage from "./pages/basic-information/documents/DocumentsPage";
import EducationPage from "./pages/basic-information/education/EducationPage";
import StaffPage from "./pages/basic-information/staff/StaffPage";
import EquipmentPage from "./pages/basic-information/technical-equipment/EquipmentPage";
import DnevnikruPage from "./pages/basic-information/technical-equipment/dnevnik.ru/DnevnikruPage";
import ScholarshipPage from "./pages/basic-information/support-measures/ScholarshipPage";
import VacanciesPage from "./pages/basic-information/vacancies/VacanciesPage";
import EnvironmentPage from "./pages/basic-information/available-environment/EnvironmentPage";
import StudentsPage from "./pages/for-students/StudentsPage";
import ReconcilPage from "./pages/for-students/reconciliation-service/ReconcilPage";
import ParentsPage from "./pages/for-parents/ParentsPage";
import OrksePage from "./pages/for-parents/ORKSE/OrksePage";
import DonatesPage from "./pages/for-parents/about-donates/DonatesPage";
import FormsPage from "./pages/for-parents/application-forms/FormsPage";
import OlympiadPage from "./pages/allrussian-olympiad/OlympiadPage";

function App() {
    return (
    <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/site-map" element={<MapPage />}/>
        <Route path="/school-food" element={<SchoolfoodPage />} />
        <Route path="/helpful-links" element={<LinksPage />} />

        <Route path="/basic-information" element={<BasicinformationPage />}>
            <Route path="/basic-information/school-history" element={<SchoolhistoryPage />} />
            <Route path="/basic-information/structure-and-management" element={<StructureandmanagementPage />} />
            <Route path="/basic-information/documents" element={<DocumentsPage />} />
            <Route path="/basic-information/education" element={<EducationPage />} />
            <Route path="/basic-information/staff" element={<StaffPage />} /> 
            <Route path="/basic-information/technical-equipment" element={<EquipmentPage />}>
                <Route path="/basic-information/technical-equipment/dnevnik.ru" element={<DnevnikruPage />} />
            </Route>
            <Route path="/basic-information/support-measures" element={<ScholarshipPage />} />
            <Route path="/basic-information/vacancies" element={<VacanciesPage />} /> 
            <Route path="/basic-information/available-environment" element={<EnvironmentPage />} />
        </Route>

        <Route path="/for-students" element={<StudentsPage />}>
            <Route path="/for-students/reconciliation-service" element={<ReconcilPage />} />
        </Route>

        <Route path="/for-parents" element={<ParentsPage />}>
            <Route path="/for-parents/orkse" element={<OrksePage />} />
            <Route path="/for-parents/about-donates" element={<DonatesPage />} />
            <Route path="/for-parents/application-forms" element={<FormsPage />} />
        </Route>

        <Route path="/allrussian-olympiad/" element={<OlympiadPage />} />
    </Routes>
    )
}

export default App;