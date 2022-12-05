import { Container } from "@mui/material";

import { SpecializationDoctorsPageTable } from "@app/components/organisms";

export default function SpecializationDoctorsPage() {
  return (
    <Container maxWidth="xl" sx={{ padding: "16px" }}>
      <SpecializationDoctorsPageTable />
    </Container>
  );
}
