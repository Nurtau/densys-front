import { Box } from "@mui/material";

import { AdminSidebar } from "@app/components";

export default function AdminPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <AdminSidebar />
      <Box>Admin page block</Box>
    </Box>
  );
}
