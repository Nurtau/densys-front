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

import { api, type DoctorPublic } from "@app/api";

interface DoctorAppointmentsProps {
  doctor: DoctorPublic;
}

export const DoctorAppointments = ({ doctor }: DoctorAppointmentsProps) => {
  const { data } = useQuery("appointments", () =>
    api.getDoctorAppointments({
      doctor_id: doctor.id!,
      token: doctor.access_token?.access_token ?? "",
    })
  );

  if (!data) return null;

  console.log(data);

  return (
    <Box
      sx={{ border: "1px solid black", padding: "16px", borderRadius: "8px" }}
    >
      <Typography variant="h4" mb={2}>
        Appointments
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
            {data.map((appointment) => (
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
  );
};
