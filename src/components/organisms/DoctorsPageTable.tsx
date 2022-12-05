import { useQuery } from "react-query";
import { Box, Typography } from "@mui/material";

import { api } from "@app/api";
import { DoctorSearchRow } from "@app/components/molecules";

export const DoctorsPageTable = () => {
  const { data: allDoctors } = useQuery("doctors", () => api.getDoctors());

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "72px 0px",
      }}
    >
      <Box sx={{ mb: "30px" }}>
        <Typography variant="h4">Doctors</Typography>
      </Box>
      <Box sx={{ width: "50%" }}>
        {(allDoctors ?? []).map((doctor) => (
          <DoctorSearchRow doctor={doctor} />
        ))}
      </Box>
    </Box>
  );
};
