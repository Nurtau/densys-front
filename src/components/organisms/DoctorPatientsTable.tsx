import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Modal,
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";

import { ModalInnerContainer } from "@app/components/atoms";
import { api, type DoctorPublic, type PatientListed } from "@app/api";

import { PrescribeProcedureForm } from "./PrescribeProcedureForm";
import { PrescribeMedicationForm } from "./PrescribeMedicationForm";

interface DoctorsPageTableProps {
  doctor: DoctorPublic;
}

export const DoctorPatientsTable = ({ doctor }: DoctorsPageTableProps) => {
  const [selectedPatient, setSelectedPatient] = useState<PatientListed | null>(
    null
  );
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (_: any, newValue: number) => {
    setTabValue(newValue);
  };
  const { data } = useQuery("patients", () => api.getPatients());

  const closeModal = () => setSelectedPatient(null);

  if (!data) return null;

  return (
    <>
      <Box
        sx={{ border: "1px solid black", padding: "16px", borderRadius: "8px" }}
      >
        <Typography variant="h4" mb={2}>
          Patients
        </Typography>
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
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((patient) => (
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
                    {new Date(
                      patient.registration_date ?? ""
                    ).toLocaleDateString()}
                  </TableCell>
                  <TableCell align="center">
                    <Link to={`/profile/patient/${patient.iin}`}>
                      <Typography sx={{ color: "blue" }}>Profile</Typography>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Modal open={!!selectedPatient} onClose={closeModal}>
        <ModalInnerContainer>
          {selectedPatient && (
            <>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Prescribe Medication" />
                    <Tab label="Prescribe Procedure" />
                  </Tabs>
                </Box>
                <TabPanel value={tabValue} index={0}>
                  <PrescribeMedicationForm
                    doctor={doctor}
                    patient={selectedPatient}
                    onCancel={closeModal}
                    onCreate={closeModal}
                  />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                  <PrescribeProcedureForm
                    doctor={doctor}
                    patient={selectedPatient}
                    onCancel={closeModal}
                    onCreate={closeModal}
                  />
                </TabPanel>
              </Box>
            </>
          )}
        </ModalInnerContainer>
      </Modal>
    </>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
