import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

import { type DoctorPublic } from "@app/api";
import { SPECIALIZATIONS } from "@app/constants";

import { rowStyles, infoBoxStyles } from "./DoctorSearchRow.css";

interface DoctorSearchRowProps {
  doctor: DoctorPublic;
  onClick?(): void;
}

export const DoctorSearchRow = ({ doctor, onClick }: DoctorSearchRowProps) => {
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
          <div>Specialization: {SPECIALIZATIONS[doctor.department_id - 1]}</div>
          <div>Procedure: {doctor.procedure}</div>
        </div>
      </div>
    </Link>
  );
};
