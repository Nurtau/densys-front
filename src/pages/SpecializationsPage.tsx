import { Container } from "@mui/material";
import { SpecializationsPageTable } from "@app/components/organisms";

export default function SpecializationsPage() {
  return (
    <Container maxWidth="xl" sx={{ padding: "16px" }}>
      <SpecializationsPageTable />
    </Container>
  );
}
