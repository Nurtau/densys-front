import { useState } from "react";
import {
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Modal,
} from "@mui/material";

import { DoctorForm } from "./DoctorForm";

import { type DoctorPublic } from "@densys/api-client";

interface PatientsTableProps {
  doctors: DoctorPublic[];
  refetchDoctors(): void;
}

export const DoctorsTable = ({
  doctors,
  refetchDoctors,
}: PatientsTableProps) => {
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorPublic | null>(
    null
  );

  const closeModal = () => setSelectedDoctor(null);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead sx={{ borderBottom: "2px solid black" }}>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Contact number</TableCell>
              <TableCell align="center">IIN number</TableCell>
              <TableCell align="center">Department</TableCell>
              <TableCell align="center">Specialization</TableCell>
              <TableCell align="center">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((doctor) => (
              <TableRow
                key={doctor.iin}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
                onClick={() => setSelectedDoctor(doctor)}
                hover
              >
                <TableCell align="center">{doctor.name}</TableCell>
                <TableCell align="center">{doctor.contact_number}</TableCell>
                <TableCell align="center">{doctor.iin}</TableCell>
                <TableCell align="center">{doctor.department_id}</TableCell>
                <TableCell align="center">{doctor.specialisation_id}</TableCell>
                <TableCell align="center">{doctor.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={!!selectedDoctor} onClose={closeModal}>
        <>
          {selectedDoctor && (
            <DoctorForm
              mode="modification"
              onCancel={closeModal}
              doctor={selectedDoctor}
              onDoctorChange={() => {
                closeModal();
                refetchDoctors();
              }}
            />
          )}
        </>
      </Modal>
    </>
  );
};
