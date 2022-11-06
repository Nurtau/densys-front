import { useState } from "react";

import { Box, Typography, Button, Modal } from "@mui/material";

import { DoctorForm } from "./DoctorForm";

export const AdminDoctors = () => {
  const [formOpen, setFormOpen] = useState(true);

  const closeModal = () => setFormOpen(false);

  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "30px" }}
      >
        <Typography variant="h4">Doctors</Typography>
        <Button variant="contained" onClick={() => setFormOpen(true)}>
          ADD DOCTOR
        </Button>
      </Box>
      <Modal open={formOpen} onClose={closeModal}>
        <DoctorForm mode="creation" onCancel={closeModal} />
      </Modal>
    </div>
  );
};
