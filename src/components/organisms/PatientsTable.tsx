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

import { PatientForm } from "./PatientForm";

import { type PatientPublic } from "@app/api";

interface PatientsTableProps {
  patients: PatientPublic[];
  refetchPatients(): void;
}

export const PatientsTable = ({
  patients,
  refetchPatients,
}: PatientsTableProps) => {
  const [selectedPatient, setSelectedPatient] = useState<PatientPublic | null>(
    null
  );

  const closeModal = () => setSelectedPatient(null);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead sx={{ borderBottom: "2px solid black" }}>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Contact number</TableCell>
              <TableCell align="center">Date of birth</TableCell>
              <TableCell align="center">IIN number</TableCell>
              <TableCell align="center">ID number</TableCell>
              <TableCell align="center">Registration date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow
                key={patient.iin}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
                onClick={() => setSelectedPatient(patient)}
                hover
              >
                <TableCell align="center">{patient.name}</TableCell>
                <TableCell align="center">{patient.contact_number}</TableCell>
                <TableCell align="center">
                  {new Date(patient.day_of_birth).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">{patient.iin}</TableCell>
                <TableCell align="center">{patient.government_id}</TableCell>
                <TableCell align="center">
                  {new Date(patient.registration_date ?? "").toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={!!selectedPatient} onClose={closeModal}>
        <>
          {selectedPatient && (
            <PatientForm
              mode="modification"
              onCancel={closeModal}
              patient={selectedPatient}
              onPatientChange={() => {
                closeModal();
                refetchPatients();
              }}
            />
          )}
        </>
      </Modal>
    </>
  );
};
