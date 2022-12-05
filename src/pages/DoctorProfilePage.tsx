import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";

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
      <DoctorHistory doctor={me.user} />
      <DoctorPatientsTable doctor={me.user} />
      <DoctorAppointments doctor={me.user} />
    </Container>
  );
}
