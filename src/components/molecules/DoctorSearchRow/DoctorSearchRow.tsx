import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

import { type DoctorPublic } from "@app/api";
import { useSpecialisations } from "../useSpecialisations";

import { rowStyles, infoBoxStyles } from "./DoctorSearchRow.css";

interface DoctorSearchRowProps {
  doctor: DoctorPublic;
  onClick?(): void;
}

export const DoctorSearchRow = ({ doctor, onClick }: DoctorSearchRowProps) => {
  const specialisations = useSpecialisations();
  const specialisationsMap = specialisations.reduce((obj, { id, name }) => {
    obj[id] = name;
    return obj;
  }, {} as Record<number, string>);

  return (
    <Link to={`/doctors/${doctor.iin}`} onClick={onClick}>
      <div className={rowStyles}>
        <Avatar
          alt="doctor photo"
          src={doctor.photo}
          sx={{ width: "50px", height: "50px" }}
        />
        <div className={infoBoxStyles}>
          <div>
            {doctor.name} {doctor.surname}
          </div>
          <div>Specialization: {specialisationsMap[doctor.department_id]}</div>
          <div>Procedure: {doctor.procedure}</div>
        </div>
      </div>
    </Link>
  );
};
