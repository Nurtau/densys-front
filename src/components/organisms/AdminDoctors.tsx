import { useState } from "react";

import { Box, Typography, Button, Modal } from "@mui/material";

import { DoctorForm } from "./DoctorForm";

export const AdminDoctors = () => {
  const [formOpen, setFormOpen] = useState(false);

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
      <Modal open={formOpen} onClose={() => setFormOpen(false)}>
        <DoctorForm />
      </Modal>
    </div>
  );
};
