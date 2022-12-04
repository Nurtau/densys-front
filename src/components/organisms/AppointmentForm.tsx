import { useFormik } from "formik";
import * as yup from "yup";
import { useQueryClient } from "react-query";
import { Box, Typography, TextField, Button } from "@mui/material";

import { ModalInnerContainer } from "@app/components/atoms";
import {
  api,
  type DoctorPublic,
  type AppointmentRequestCreate,
  type DateRange,
} from "@app/api";
import { useMe } from "@app/auth";

interface AppointmentFormProps {
  doctor: DoctorPublic;
  timeslot: DateRange;
  onCancel(): void;
  onCreate(): void;
}

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
  phone: yup.string().required("Contact number is required"),
  email: yup.string().required("Email is required"),
});

export const AppointmentForm = ({
  doctor,
  timeslot,
  onCancel,
  onCreate,
}: AppointmentFormProps) => {
  const { me } = useMe();
  const isPatient = me?.role === "patient";

  const queryClient = useQueryClient();

  const formik = useFormik<Omit<AppointmentRequestCreate, "time_slots">>({
    initialValues: {
      doctor_id: doctor.id,
      specialisation_id: doctor.specialisation_id,
      name: me?.user.name ?? "",
      surname: me?.user.surname ?? "",
      middlename: me?.user.middle_name ?? "",
      email: isPatient ? me.user.email ?? "" : "",
      phone: me?.user.contact_number ?? "+7",
      is_active: true,
    },
    validationSchema: validationSchema,
    onSubmit: async (data) => {
      const requestBody: AppointmentRequestCreate = {
        ...data,
        time_slots: [timeslot],
      };
      await api.createAppointmentRequest(requestBody);
      queryClient.invalidateQueries(["active_requests"]);
      onCreate();
    },
  });

  return (
    <ModalInnerContainer>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          alignItems: "center",
        }}
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="h4" sx={{ ml: 1 }}>
            Appointment Form
          </Typography>
        </Box>
        <div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Name"
              placeholder="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              disabled={isPatient}
            />
            <TextField
              required
              id="outlined-required"
              label="Surname"
              placeholder="Surname"
              name="surname"
              value={formik.values.surname}
              onChange={formik.handleChange}
              error={formik.touched.surname && Boolean(formik.errors.surname)}
              helperText={formik.touched.surname && formik.errors.surname}
              disabled={isPatient}
            />
          </div>
          <div>
            <TextField
              id="outlined-not-required"
              label="Middle name"
              placeholder="Middle name"
              name="middlename"
              value={formik.values.middlename}
              onChange={formik.handleChange}
              error={
                formik.touched.middlename && Boolean(formik.errors.middlename)
              }
              helperText={formik.touched.middlename && formik.errors.middlename}
              disabled={isPatient}
            />
            <TextField
              required
              id="outlined-required"
              label="Phone number"
              placeholder="+7 707 000 00 00"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              disabled={isPatient}
            />
          </div>
          <div>
            <TextField
              label="Email"
              placeholder="example@gmail.com"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              disabled={isPatient}
            />
          </div>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              mt: "20px",
            }}
          >
            <Button sx={{ ml: "auto" }} variant="text" onClick={onCancel}>
              CANCEL
            </Button>
            <Button sx={{ mr: "8px" }} type="submit" variant="contained">
              CREATE
            </Button>
          </Box>
        </div>
      </Box>
    </ModalInnerContainer>
  );
};
