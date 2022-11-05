import { Routes, Route } from "react-router-dom";

import { NavBar, ProtectedRoute } from "@app/components";
import HomePage from "@app/pages/HomePage";
import LoginPage from "@app/pages/LoginPage";
import SignupPage from "@app/pages/SignupPage";
import AdminPage from "@app/pages/AdminPage";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
