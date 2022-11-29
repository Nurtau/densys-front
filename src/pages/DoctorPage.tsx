import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "react-query";

import { api } from "@app/api";
import { DoctorProfile } from "@app/components/organisms";

export default function DoctorPage() {
  const { data: doctors, isLoading } = useQuery("doctors", () =>
    api.getDoctors()
  );

  if (isLoading) return null;

  const { iin } = useParams();
  const doctor = (doctors ?? []).find((d) => d.iin === iin);

  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  return <DoctorProfile doctor={doctor} />;
}
