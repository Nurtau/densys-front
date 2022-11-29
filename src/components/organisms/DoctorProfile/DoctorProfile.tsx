import { Typography } from "@mui/material";

import { type DoctorPublic } from "@app/api";
import { DEPARTMENTS, SPECIALIZATIONS } from "@app/constants";

import {
  profileBoxStyles,
  photoBoxStyles,
  photoStyles,
  infoBoxStyles,
} from "./DoctorProfile.css";

interface DoctorProfileProps {
  doctor: DoctorPublic;
}

export const DoctorProfile = ({ doctor }: DoctorProfileProps) => {
  const {
    name,
    middle_name,
    surname,
    photo,
    iin,
    department_id,
    specialisation_id,
    procedure,
    experience,
    rating,
    education,
    category,
    contact_number,
    price,
  } = doctor;
  return (
    <div className={profileBoxStyles}>
      <div className={infoBoxStyles}>
        <Typography variant="h3">
          {name} {middle_name} {surname}
        </Typography>
        <div>IIN: {iin}</div>
        <div>Department: {DEPARTMENTS[department_id - 1]}</div>
        <div>Specialization: {SPECIALIZATIONS[specialisation_id - 1]}</div>
        <div>Procedure: {procedure}</div>
        <div>
          Experience: {experience} {experience > 1 ? "years" : "year"}
        </div>
        <div>Rating: {rating}</div>
        <div>Category: {category}</div>
        <div>Education: {education}</div>
        <div>Contact number: {contact_number}</div>
        <div>Price: {price}</div>
      </div>
      <div className={photoBoxStyles}>
        <img src={photo} className={photoStyles} />
      </div>
    </div>
  );
};
