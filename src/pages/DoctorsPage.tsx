import { Container } from "@mui/material";

import { DoctorsPageTable } from "@app/components/organisms";

export default function DoctorsPage() {
  return (
    <Container maxWidth="xl" sx={{ padding: "16px" }}>
      <DoctorsPageTable />
    </Container>
  );
}
