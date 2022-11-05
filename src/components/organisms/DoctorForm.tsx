import * as yup from "yup";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useFormik } from "formik";
import { Box, TextField, Button, MenuItem } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import {
  DoctorRegistrationApi,
  type DoctorCreate,
  type DoctorPublic,
} from "@densys/api-client";

import { useAuth } from "@app/auth";
import { ModalInnerContainer } from "@app/components/atoms";
import { DEPARTMENTS, SPECIALIZATIONS } from "@app/constants";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
  role: yup.string().required("Role is required"),
  specialization: yup.string().required("Specialization is required"),
  department: yup.string().required("Department is required"),
  experience: yup.number().required("Experience is required"),
  iin: yup.number().required("IIN is required"),
  category: yup.string().required("Category is required"),
  price: yup.number().required("Price is required"),
  schedule: yup.string().required("Schedule is required"),
  degree: yup.string().required("Degree is required"),
  rating: yup.number().required("Rating is required"),
  contact_number: yup.string().required("Contact number is required"),
  day_of_birth: yup.date().required("Day of birth is required"),
  address: yup.string().required("Address is required"),
  password: yup
    .string()
    .min(7, "Password should be of minimum 7 characters length")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

interface DoctorFormBaseProps {
  onCancel(): void;
}

interface DoctorCreateFormProps {
  mode: "creation";
  patient?: never;
}

interface DoctorModifyFormProps {
  mode: "modification";
  patient: DoctorPublic;
}

type DoctorFormProps = DoctorFormBaseProps &
  (DoctorCreateFormProps | DoctorModifyFormProps);

const categories = ["Highest", "First", "Second"];
const degrees = ["Highest", "First", "Second"];
const schedules = ["Day", "Night"];

export const DoctorForm = ({ onCancel, mode, patient }: DoctorFormProps) => {
  const { accessToken } = useAuth();
  const [modify, setModify] = useState(false);
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-07"));

  const areInputDisabled = mode === "modification" && !modify;

  const formik = useFormik<
    Omit<DoctorCreate, "access_token" | "registration_date"> & {
      passwordConfirmation: string;
    }
  >({
    initialValues: {
      name: "",
      surname: "",
      middle_name: "",
      role: "",
      specialization: "",
      department: "",
      experience: 0,
      iin: 0,
      category: "",
      price: 0,
      schedule: "",
      degree: "",
      rating: 0,
      contact_number: "+7",
      address: "",
      password: "",
      day_of_birth: dayjs("2001-01-01").toDate(),
      passwordConfirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (data) => {
      const api = new DoctorRegistrationApi();
      const requestBody: DoctorCreate = {
        ...data,
        access_token: `Bearer ${accessToken?.access_token ?? ""}`,
        registration_date: new Date(),
      };
      const response = await api.createPatient({ DoctorCreate: requestBody });
      console.log(response);
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
        noValidate
        autoComplete="off"
      >
        <h1>Doctor Form</h1>
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
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Middle name"
              placeholder="Middle name"
              name="middle_name"
              value={formik.values.middle_name}
              onChange={formik.handleChange}
              error={
                formik.touched.middle_name && Boolean(formik.errors.middle_name)
              }
              helperText={
                formik.touched.middle_name && formik.errors.middle_name
              }
              disabled={areInputDisabled}
            />
            <TextField
              required
              id="outlined-required"
              label="Phone number"
              placeholder="+7 707 000 00 00"
              name="contact_number"
              value={formik.values.contact_number}
              onChange={formik.handleChange}
              error={
                formik.touched.contact_number &&
                Boolean(formik.errors.contact_number)
              }
              helperText={
                formik.touched.contact_number && formik.errors.contact_number
              }
              disabled={areInputDisabled}
            />
          </div>
          <div>
            <DesktopDatePicker
              label="Birth date"
              renderInput={(params) => <TextField {...params} />}
              value={dayjs(formik.values.day_of_birth)}
              onChange={(value) =>
                formik.setFieldValue("day_of_birth", value?.toDate())
              }
              disabled={areInputDisabled}
            />
            <TextField
              required
              id="outlined-required"
              label="IIN number"
              placeholder="IIN number"
              name="iin"
              value={formik.values.iin}
              onChange={formik.handleChange}
              error={formik.touched.iin && Boolean(formik.errors.iin)}
              helperText={formik.touched.iin && formik.errors.iin}
              disabled={areInputDisabled}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="ID number"
              placeholder="ID number"
              disabled={areInputDisabled}
            />
            <TextField
              required
              id="outlined-required"
              label="Address"
              placeholder="Address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              disabled={areInputDisabled}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              select
              label="Specialization"
              placeholder="Surgeon"
              name="specialization"
              value={formik.values.specialization}
              onChange={formik.handleChange}
              error={
                formik.touched.specialization &&
                Boolean(formik.errors.specialization)
              }
              helperText={
                formik.touched.specialization && formik.errors.specialization
              }
              disabled={areInputDisabled}
            >
              {SPECIALIZATIONS.map((specialization) => (
                <MenuItem value={specialization}>{specialization}</MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="outlined-required"
              select
              label="Department"
              placeholder="Medicine"
              name="department"
              value={formik.values.department}
              onChange={formik.handleChange}
              error={
                formik.touched.department &&
                Boolean(formik.errors.department)
              }
              helperText={
                formik.touched.department && formik.errors.department
              }
              disabled={areInputDisabled}
            >
            >
              {DEPARTMENTS.map((department) => (
                <MenuItem value={department}>{department}</MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField required id="outlined-required" label="Experience" />
            <TextField
              required
              id="outlined-required"
              select
              label="Category"
              placeholder="First"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              error={
                formik.touched.category &&
                Boolean(formik.errors.category)
              }
              helperText={
                formik.touched.category && formik.errors.category
              }
              disabled={areInputDisabled}
            >
              {categories.map((category) => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Price"
              placeholder="Price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              disabled={areInputDisabled}
            />
            <TextField
              required
              id="outlined-required"
              select
              label="Schedule"
              placeholder="Day"
              name="schedule"
              value={formik.values.schedule}
              onChange={formik.handleChange}
              error={
                formik.touched.schedule &&
                Boolean(formik.errors.schedule)
              }
              helperText={
                formik.touched.schedule && formik.errors.schedule
              }
              disabled={areInputDisabled}
            >
              {schedules.map((schedule) => (
                <MenuItem value={schedule}>{schedule}</MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              select
              label="Degree"
              placeholder="First"
              name="degree"
              value={formik.values.degree}
              onChange={formik.handleChange}
              error={
                formik.touched.degree &&
                Boolean(formik.errors.degree)
              }
              helperText={
                formik.touched.degree && formik.errors.degree
              }
              disabled={areInputDisabled}
            >
              {degrees.map((degree) => (
                <MenuItem value={degree}>{degree}</MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="outlined-required"
              label="Rating"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
          </div>
          <div>
            <TextField label="Homepage URL" placeholder="Homepage URL" />
          </div>
          <div>
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              disabled={areInputDisabled}
            />
            <TextField
              required
              id="outlined-password-input"
              label="Confirm password"
              type="password"
              autoComplete="current-password"
              placeholder="Confirm password"
              name="passwordConfirmation"
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              error={
                formik.touched.passwordConfirmation &&
                Boolean(formik.errors.passwordConfirmation)
              }
              helperText={
                formik.touched.passwordConfirmation &&
                formik.errors.passwordConfirmation
              }
              disabled={areInputDisabled}
            />
          </div>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              mt: "20px",
            }}
          >
            <Button sx={{ ml: "auto" }} type="submit" variant="text">
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
