import { Box, Typography } from "@mui/material";

import { DepartmentsTable } from "./DepartmentsTable";

export const AdminDepartments = () => {
  return (
    <div>
      <Box sx={{ mb: "30px" }}>
        <Typography variant="h4">Departments</Typography>
      </Box>
      <DepartmentsTable />
    </div>
  );
};
