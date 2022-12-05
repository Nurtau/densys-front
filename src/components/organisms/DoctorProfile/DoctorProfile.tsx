import { useQuery } from "react-query";
import { useState } from "react";
import {
  Typography,
  TextField,
  MenuItem,
  Button,
  Modal,
  Snackbar,
  Alert,
} from "@mui/material";

import { api, type DoctorPublic, type Specialisation } from "@app/api";
import { useDepartments, useSpecialisations } from "@app/components/molecules";
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
  const departments = useDepartments();
  const specialisations = useSpecialisations();

  const [timeslotIndex, setTimeslotIndex] = useState<number | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);

  const openModal = () => setFormOpen(true);
  const closeModal = () => setFormOpen(false);

  const timeslots = getTimeslots(doctor.day_start!, doctor.day_end!).filter(
    (ts) => {
      if (!data) return false;
      const bookedTimeslotsStart: string[] = [];

      const doctorRequests = data.filter((d) => d.doctor_id === doctor.id);

      doctorRequests.forEach((d) => {
        if (d.time_slots) {
          bookedTimeslotsStart.push(d.time_slots[0].start_datetime);
        }
      });

      return !bookedTimeslotsStart.find(
        (booked) => booked === ts.start_datetime
      );
    }
  );

  const doctorDepartment = departments.find(
    (department) => department.id === department_id
  );

  const doctorSpecialisation = specialisations.find(
    (specialisation) => specialisation.id === specialisation_id
  );

  const selectedTimeslot =
    timeslotIndex !== null ? timeslots[timeslotIndex] : undefined;

  return (
    <>
      <div className={profileBoxStyles}>
        <div className={infoBoxStyles}>
          <Typography variant="h3">
            {name} {middle_name} {surname}
          </Typography>
          <div>IIN: {iin}</div>
          <div>Department: {doctorDepartment?.name ?? "NOT FOUND"}</div>
          <div>Specialization: {doctorSpecialisation?.name ?? "NOT FOUND"}</div>
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
            sx={{ mt: "20px", width: "50%", minWidth: "250px" }}
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
            sx={{ width: "50%", minWidth: "250px" }}
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
              onCreate={() => {
                closeModal();
                setMessageOpen(true);
              }}
              timeslot={selectedTimeslot}
            />
          )}
        </>
      </Modal>
      <Snackbar
        open={messageOpen}
        autoHideDuration={6000}
        onClose={() => setMessageOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setMessageOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Successfully sent appointment request!
        </Alert>
      </Snackbar>
    </>
  );
};
