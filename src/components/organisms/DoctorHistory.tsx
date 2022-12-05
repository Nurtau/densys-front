import { useQuery } from "react-query";

import { api, type DoctorPublic } from "@app/api";

interface DoctorHistoryProps {
  doctor: DoctorPublic;
}

export const DoctorHistory = ({ doctor }: DoctorHistoryProps) => {
  const { data } = useQuery("doctor_history", () =>
    api.getTreatmentHistory({ token: doctor.access_token?.access_token ?? "" })
  );

  console.log("history: ", data);

  if (!data) return null;

  return <div>{JSON.stringify(data)}</div>;
};
