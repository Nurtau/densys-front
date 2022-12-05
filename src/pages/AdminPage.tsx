import { Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

import {
  AdminDoctors,
  AdminPatients,
  AdminPendingAppointments,
  AdminSpecializations,
  AdminDepartments,
  AdminLoginForm,
  AdminReport,
} from "@app/components/organisms";
import { AdminSidebar, ProtectedRoute } from "@app/components/molecules";

export default function AdminPage() {
  return (
    <Routes>
      <Route path="/login" element={<AdminLoginForm />} />
      <Route
        path="*"
        element={
          <ProtectedRoute navigateTo="/admin/login">
            <Box sx={{ display: "flex", width: "100%" }}>
              <AdminSidebar />
              <Box sx={{ flexGrow: "1", p: "40px", pr: "200px" }}>
                <Routes>
                  <Route path="/patients" element={<AdminPatients />} />
                  <Route path="/doctors" element={<AdminDoctors />} />
                  <Route path="/departments" element={<AdminDepartments />} />
                  <Route
                    path="/specializations"
                    element={<AdminSpecializations />}
                  />
                  <Route
                    path="/pending-appointments"
                    element={<AdminPendingAppointments />}
                  />
                  <Route
                    path="/report"
                    element={<AdminReport />}
                  />

                </Routes>
              </Box>
            </Box>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
