import { Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

import {
  AdminSidebar,
  AdminDoctors,
  AdminPatients,
  AdminSpecializations,
  AdminDepartments,
} from "@app/components";

export default function AdminPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <AdminSidebar />
      <Routes>
        <Route path="/patients" element={<AdminPatients />} />
        <Route path="/doctors" element={<AdminDoctors />} />
        <Route path="/departments" element={<AdminDepartments />} />
        <Route path="/specializations" element={<AdminSpecializations />} />
      </Routes>
    </Box>
  );
}
