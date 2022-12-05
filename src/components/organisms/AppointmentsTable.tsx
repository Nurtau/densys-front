import { useQuery, useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import {
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  Button,
} from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";

import {
  api,
  type DoctorPublic,
  type AppointmentRequestUpdate,
} from "@app/api";

import { useAdminAuth } from "@app/auth";

interface AppointmentsTableProps {
  requests: AppointmentRequestUpdate[];
}

export const AppointmentsTable = ({ requests }: AppointmentsTableProps) => {
  const queryClient = useQueryClient();
  const { accessToken } = useAdminAuth();

  const mutationApprove = useMutation({
    mutationFn: (appointment: AppointmentRequestUpdate) => {
      return api.markAppointment(
        {
          token: accessToken?.access_token ?? "",
          status: 1,
        },
        appointment
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries("appointments");
    },
  });

  const mutationReject = useMutation({
    mutationFn: (appointment: AppointmentRequestUpdate) => {
      return api.markAppointment(
        {
          token: accessToken?.access_token ?? "",
          status: -1,
        },
        appointment
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries("appointments");
    },
  });

  const onApprove = (appointment: AppointmentRequestUpdate) => {
    console.log(appointment);
    mutationApprove.mutate(appointment);
  };

  const onReject = (appointment: AppointmentRequestUpdate) => {
    mutationReject.mutate(appointment);
  };

  const { data } = useQuery("doctors", () => api.getDoctors());

  const doctorsMap = (data ?? []).reduce((obj, doctor) => {
    obj[doctor.id!] = doctor;
    return obj;
  }, {} as Record<number, DoctorPublic>);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead sx={{ borderBottom: "2px solid black" }}>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Surname</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Time slots</TableCell>
              <TableCell align="center">Doctor</TableCell>
              <TableCell align="center">Approve</TableCell>
              <TableCell align="center">Reject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((appointment) => (
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
                <TableCell align="center">
                  {appointment.time_slots![0].start_datetime +
                    "-" +
                    appointment.time_slots![0].end_datetime}
                </TableCell>
                <TableCell align="center">
                  <Typography variant="subtitle1">
                    <Link
                      to={`/doctors/${doctorsMap[appointment.doctor_id].iin}`}
                    >
                      {doctorsMap[appointment.doctor_id].name}
                    </Link>
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Button variant="text" onClick={() => onApprove(appointment)}>
                    <CheckCircle color="success" />
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button variant="text" onClick={() => onReject(appointment)}>
                    <Cancel color="error" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
