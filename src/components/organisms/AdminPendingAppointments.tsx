import { useQuery } from "react-query";
import { Box, Typography } from "@mui/material";

import { api } from "@app/api";

import { AppointmentsTable } from "./AppointmentsTable";

export const AdminPendingAppointments = () => {
  const { data } = useQuery("appointments", () => api.getActiveRequests());

  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "30px" }}
      >
        <Typography variant="h4">Pending Appointments</Typography>
      </Box>
      <AppointmentsTable requests={data ?? []} />
    </div>
  );
};
