import { useQuery } from "react-query";
import {
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Box,
  Typography,
} from "@mui/material";

import { api, type PatientPublic } from "@app/api";

interface PatientHistoryProps {
  patient: PatientPublic;
}

export const PatientHistory = ({ patient }: PatientHistoryProps) => {
  const { data } = useQuery(["doctor_history", patient.iin], () =>
    api.getTreatmentHistoryPatientIin({ iin: patient.iin })
  );

  if (!data) return null;

  return (
    <Box
      sx={{ border: "1px solid black", padding: "16px", borderRadius: "8px" }}
    >
      <Typography variant="h4" mb={2}>
        History
      </Typography>
      {data.medications && data.medications.length > 0 && (
        <Box>
          <Typography variant="h5" mb={2}>
            Prescribed medications
          </Typography>
          <TableContainer>
            <Table>
              <TableHead sx={{ borderBottom: "2px solid black" }}>
                <TableRow>
                  <TableCell align="center">Doctor ID</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">From</TableCell>
                  <TableCell align="center">To</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.medications.map((medication, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center">{medication.doctor_id}</TableCell>
                    <TableCell align="center">{medication.name}</TableCell>
                    <TableCell align="center">
                      {new Date(medication.start_date).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="center">
                      {new Date(medication.end_date).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {data.procedures && data.procedures.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h5" mb={2}>
            Prescribed medications
          </Typography>
          <TableContainer>
            <Table>
              <TableHead sx={{ borderBottom: "2px solid black" }}>
                <TableRow>
                  <TableCell align="center">Doctor ID</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Cost</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.procedures.map((procedure, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center">{procedure.doctor_id}</TableCell>
                    <TableCell align="center">{procedure.name}</TableCell>
                    <TableCell align="center">
                      {new Date(procedure.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="center">{procedure.cost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
};
