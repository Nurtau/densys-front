import { useState } from "react";
import { useQuery } from "react-query";
import { Box, Typography, Button, Modal } from "@mui/material";

import { api } from "@app/api";

import { DoctorsTable } from "./DoctorsTable";
import { DoctorForm } from "./DoctorForm";

export const AdminDoctors = () => {
  const [formOpen, setFormOpen] = useState(false);

  const { data, refetch } = useQuery("doctors", () => api.getDoctors());

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
      <DoctorsTable doctors={data ?? []} refetchDoctors={refetch} />
      <Modal open={formOpen} onClose={closeModal}>
        <DoctorForm
          mode="creation"
          onCancel={closeModal}
          onDoctorChange={() => {
            closeModal();
            refetch();
          }}
        />
      </Modal>
    </div>
  );
};
