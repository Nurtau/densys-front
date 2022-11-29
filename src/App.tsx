import { Routes, Route } from "react-router-dom";

import { NavBar } from "@app/components/organisms";
import HomePage from "@app/pages/HomePage";
import LoginPage from "@app/pages/LoginPage";
import SignupPage from "@app/pages/SignupPage";
import AdminPage from "@app/pages/AdminPage";
import SpecializationsPage from "@app/pages/SpecializationsPage";
import DoctorsPage from "@app/pages/DoctorsPage";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/specializations" element={<SpecializationsPage />} />
        <Route path="/specializations/doctors" element={<DoctorsPage />} />
      </Routes>
    </div>
  );
}