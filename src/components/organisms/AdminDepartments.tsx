import { useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";

import { DepartmentsTable, useDepartments } from "@app/components/molecules";

import { DepartmentForm } from "./DepartmentForm";

export const AdminDepartments = () => {
  const [formOpen, setFormOpen] = useState(false);
  const departments = useDepartments();

  const closeModal = () => setFormOpen(false);

  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "30px" }}
      >
        <Typography variant="h4">DEPARTMENTS</Typography>
        <Button variant="contained" onClick={() => setFormOpen(true)}>
          ADD DEPARTMENT
        </Button>
      </Box>
      <DepartmentsTable departments={departments} />
      <Modal open={formOpen} onClose={closeModal}>
        <DepartmentForm onCancel={closeModal} onCreate={closeModal} />
      </Modal>
    </div>
  );
};
