import { useState } from "react";
import { useQuery } from "react-query";
import { Box, Typography, Button, Modal } from "@mui/material";

import { api } from "@app/api";

import { PatientsTable } from "./PatientsTable";
import { PatientForm } from "./PatientForm";

export const AdminPatients = () => {
  const [formOpen, setFormOpen] = useState(false);

  const { data, refetch } = useQuery("patients", () => api.getPatients());

  const closeModal = () => setFormOpen(false);

  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "30px" }}
      >
        <Typography variant="h4">Patients</Typography>
        <Button variant="contained" onClick={() => setFormOpen(true)}>
          ADD PATIENT
        </Button>
      </Box>
      <PatientsTable patients={data ?? []} refetchPatients={refetch} />
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
