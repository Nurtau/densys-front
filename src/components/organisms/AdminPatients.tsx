import { useState } from "react";
import { useQuery } from "react-query";
import { Box, Typography, Button, Modal } from "@mui/material";

import { TestApi } from "@densys/api-client";

import { PatientsTable } from "@app/components/molecules";

import { PatientForm } from "./PatientForm";

const patientsApi = new TestApi();

export const AdminPatients = () => {
  const [formOpen, setFormOpen] = useState(false);

  const { data, error } = useQuery("patients", () => patientsApi.getPatients());

  console.log(data, error);

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
      <PatientsTable patients={data ?? []} />
      <Modal open={formOpen} onClose={closeModal}>
        <PatientForm mode="creation" onCancel={closeModal} />
      </Modal>
    </div>
  );
};
