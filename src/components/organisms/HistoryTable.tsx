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

import { type History } from "@app/api";

interface HistoryProps {
  history: History;
}

export const HistoryDoctorTable = ({ history }: HistoryProps) => {
  return (
    <Box
      sx={{ border: "2px solid black", padding: "16px", borderRadius: "8px" }}
    >
      {history.medications?.length > 0 && (
        <Box>
          <Typography variant="h4" mb={2}>
            Prescribed medications
          </Typography>
          <TableContainer>
            <Table>
              <TableHead sx={{ borderBottom: "2px solid black" }}>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Surname</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Phone</TableCell>
                  <TableCell align="center">Time slots</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {history.medications.map((appointment) => (
                  <TableRow
                    key={appointment.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center">{appointment.name}</TableCell>
                    <TableCell align="center">{appointment.surname}</TableCell>
                    <TableCell align="center">{appointment.email}</TableCell>
                    <TableCell align="center">{appointment.phone}</TableCell>
                    <TableCell align="center">TIME NOT AVAILABLE</TableCell>
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
