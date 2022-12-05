import { api, type DoctorPublic, type PatientPublic } from "@app/api";

interface PrescribeProcedureFormProps {
  doctor: DoctorPublic;
  patient: PatientPublic;
}

export const PrescribeProcedureForm = ({
  doctor,
  patient,
}: PrescribeProcedureFormProps) => {
  return <div>5</div>;
};
