import { useState } from "react";

import { Box, Typography, Button, Modal } from "@mui/material";

import { PatientForm } from "./PatientForm";

export const AdminPatients = () => {
  const [formOpen, setFormOpen] = useState(false);

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
      <Modal open={formOpen} onClose={closeModal}>
        <PatientForm onCancel={closeModal}/>
      </Modal>
    </div>
  );
};
