import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { api } from "@app/api";
import { DoctorSearchRow } from "@app/components/molecules";
import { SPECIALIZATIONS } from "@app/constants";

export const SpecializationDoctorsPageTable = () => {
  const { data: allDoctors } = useQuery("doctors", () => api.getDoctors());

  const { id } = useParams();
  const doctorsBySpecialization = (allDoctors ?? []).filter(
    (d) => d.specialisation_id === Number(id)
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "72px 160px",
      }}
    >
      <Box sx={{ mb: "30px" }}>
        <Typography variant="h4">
          Doctors of {SPECIALIZATIONS[Number(id) - 1]} Specialization
        </Typography>
      </Box>
      <Box sx={{ width: "50%" }}>
        {(doctorsBySpecialization ?? []).map((doctor) => (
          <DoctorSearchRow doctor={doctor} />
        ))}
      </Box>
    </Box>
  );
};
