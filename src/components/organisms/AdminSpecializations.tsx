import { useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";

import {
  SpecializationsTable,
  useSpecialisations,
} from "@app/components/molecules";

import { SpecializationForm } from "./SpecializationForm";

export const AdminSpecializations = () => {
  const [formOpen, setFormOpen] = useState(false);
  const specialisations = useSpecialisations();

  const closeModal = () => setFormOpen(false);

  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "30px" }}
      >
        <Typography variant="h4">Specializations</Typography>
        <Button variant="contained" onClick={() => setFormOpen(true)}>
          ADD SPECIALIZATION
        </Button>
      </Box>
      <SpecializationsTable specialisations={specialisations} />
      <Modal open={formOpen} onClose={closeModal}>
        <SpecializationForm onCancel={closeModal} onCreate={closeModal} />
      </Modal>
    </div>
  );
};
