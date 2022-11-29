import { useQuery } from "react-query";
import { useState } from "react";
import { Typography, TextField, MenuItem, Button, Modal } from "@mui/material";

import { api, type DoctorPublic } from "@app/api";
import { DEPARTMENTS, SPECIALIZATIONS } from "@app/constants";
import { getTimeslots } from "@app/lib";

import { AppointmentForm } from "../AppointmentForm";
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

  const { data } = useQuery("active_requests", () => api.getActiveRequests());
  console.log(data);

  const [timeslotIndex, setTimeslotIndex] = useState<number | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  const openModal = () => setFormOpen(true);
  const closeModal = () => setFormOpen(false);

  const timeslots = getTimeslots(doctor.day_start, doctor.day_end);

  const selectedTimeslot = timeslotIndex ? timeslots[timeslotIndex] : undefined;

  return (
    <>
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

          <TextField
            sx={{ mt: "20px", width: "50%" }}
            select
            label="Available timeslots"
            placeholder="12:00-12:30"
            size="small"
            value={selectedTimeslot}
            onChange={(event) => setTimeslotIndex(Number(event.target.value))}
          >
            {timeslots.map((timeslot, index) => (
              <MenuItem value={index}>
                {timeslot.start_datetime + "-" + timeslot.end_datetime}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="outlined"
            sx={{ width: "50%" }}
            disabled={timeslotIndex === null}
            onClick={openModal}
          >
            Create appointment
          </Button>
        </div>
        <div className={photoBoxStyles}>
          <img src={photo} className={photoStyles} />
        </div>
      </div>
      <Modal open={formOpen} onClose={closeModal}>
        <>
          {selectedTimeslot && (
            <AppointmentForm
              doctor={doctor}
              onCancel={closeModal}
              onCreate={closeModal}
              timeslot={selectedTimeslot}
            />
          )}
        </>
      </Modal>
    </>
  );
};
