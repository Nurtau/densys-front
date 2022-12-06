import { Navigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";

import { useMe } from "@app/auth";
import {
  DoctorHistory,
  DoctorAppointments,
  DoctorPatientsTable,
} from "@app/components/organisms";

export default function DoctorProfilePage() {
  const { me } = useMe();

  if (!me || me.role !== "doctor") {
    return <Navigate to="/" replace />;
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "16px",
        marginTop: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <Typography variant="h4">
        Welcome Doctor, {me.user.name + " " + me.user.surname}
      </Typography>
      <DoctorPatientsTable doctor={me.user} />
      <DoctorAppointments doctor={me.user} />
      <DoctorHistory doctor={me.user} />
    </Container>
  );
}
