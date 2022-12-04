import { Routes, Route } from "react-router-dom";

import { NavBar } from "@app/components/organisms";
import HomePage from "@app/pages/HomePage";
import LoginPage from "@app/pages/LoginPage";
import AdminPage from "@app/pages/AdminPage";
import SpecializationsPage from "@app/pages/SpecializationsPage";
import SpecializationDoctorsPage from "@app/pages/SpecializationDoctorsPage";
import DoctorsPage from "@app/pages/DoctorsPage";
import DoctorPage from "@app/pages/DoctorPage";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/specializations" element={<SpecializationsPage />} />
        <Route
          path="/specializations/:id"
          element={<SpecializationDoctorsPage />}
        />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors/:iin" element={<DoctorPage />} />
      </Routes>
    </div>
  );
}
