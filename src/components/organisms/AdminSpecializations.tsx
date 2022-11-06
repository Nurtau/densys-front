import { Box, Typography } from "@mui/material";

import { SpecializationsTable } from "@app/components/molecules";

export const AdminSpecializations = () => {
  return (
    <div>
      <Box sx={{ mb: "30px" }}>
        <Typography variant="h4">Specializations</Typography>
      </Box>
      <SpecializationsTable />
    </div>
  );
};
