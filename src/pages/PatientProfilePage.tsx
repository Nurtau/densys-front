import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "react-query";
import { Container, Typography } from "@mui/material";

import { api } from "@app/api";
import { useMe } from "@app/auth";
import { PatientHistory } from "@app/components/organisms";

export default function PatientProfilePage() {
  const { me } = useMe();
  const { iin } = useParams();
  const { data } = useQuery("patients", () => api.getPatients());

  if (!me || (me.role === "patient" && me.user.iin !== iin)) {
    return <Navigate to="/" replace />;
  }

  let user = me.user;

  if (me.role === "doctor") {
    if (data) {
      const patient = data.find((p) => p.iin === iin);

      if (!patient) {
        return <Navigate to="/" replace />;
      }

      //QUICK WORKAROUND
      user = patient as any;
    }
  }

  if (!data) return null;

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
        Patient profile, {user.name + " " + user.surname}
      </Typography>
      <PatientHistory patient={user as any} />
    </Container>
  );
}
