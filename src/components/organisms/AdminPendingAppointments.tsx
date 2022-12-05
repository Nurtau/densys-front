import { useState } from "react";
import { useQuery } from "react-query";
import { Box, Typography, Modal } from "@mui/material";

import { api } from "@app/api";

import { AppointmentsTable } from "./AppointmentsTable";
import { PatientForm } from "./PatientForm";

export const AdminPendingAppointments = () => {
  const [formOpen, setFormOpen] = useState(false);

  const { data, refetch } = useQuery("appointments", () => api.getActiveRequests());

  const closeModal = () => setFormOpen(false);

  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "30px" }}
      >
        <Typography variant="h4">Pending Appointments</Typography>
      </Box>
      <AppointmentsTable requests={data ?? []} refetchAppointments={refetch} />
      <Modal open={formOpen} onClose={closeModal}>
        <PatientForm
          mode="creation"
          onCancel={closeModal}
          onPatientChange={() => {
            closeModal();
            refetch();
          }}
        />
      </Modal>
    </div>
  );
};
