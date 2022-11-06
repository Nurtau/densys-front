import * as yup from "yup";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useFormik } from "formik";
import { Box, TextField, Button, MenuItem } from "@mui/material";

import { type DoctorCreate, type DoctorPublic } from "@densys/api-client";

import { useAuth } from "@app/auth";
import { ModalInnerContainer } from "@app/components/atoms";
import { DEPARTMENTS, SPECIALIZATIONS, SCHEDULES } from "@app/constants";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
  specialisation_id: yup.string().required("Specialization is required"),
  department_id: yup.string().required("Department is required"),
  experience: yup.number().required("Experience is required"),
  iin: yup.number().required("IIN is required"),
  category: yup.string().required("Category is required"),
  price: yup.number().required("Price is required"),
  schedule_id: yup.string().required("Schedule is required"),
  education: yup.string().required("Degree is required"),
  rating: yup.number().required("Rating is required"),
  contact_number: yup.string().required("Contact number is required"),
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
  doctor?: never;
}

interface DoctorModifyFormProps {
  mode: "modification";
  doctor: DoctorPublic;
}

type DoctorFormProps = DoctorFormBaseProps &
  (DoctorCreateFormProps | DoctorModifyFormProps);

const categories = ["Highest", "First", "Second"];
const degrees = ["Bachelor", "Master", "Phd"];

export const DoctorForm = ({ onCancel, mode, doctor }: DoctorFormProps) => {
  const { accessToken } = useAuth();
  const [modify, setModify] = useState(false);

  const areInputDisabled = mode === "modification" && !modify;

  const formik = useFormik<
    Omit<DoctorCreate, "access_token"> & {
      passwordConfirmation: string;
    }
  >({
    initialValues: {
      name: "",
      surname: "",
      middle_name: "",
      specialisation_id: 0,
      department_id: 0,
      experience: undefined as any,
      iin: undefined as any,
      category: "",
      price: 0,
      schedule_id: 0,
      education: "",
      url: "",
      photo: "",
      rating: undefined as any,
      contact_number: "+7",
      address: "",
      password: "",
      passwordConfirmation: "",
      ...doctor,
    },
    validationSchema: validationSchema,
    onSubmit: async (data) => {
      const requestBody: DoctorCreate = {
        ...data,
        access_token: accessToken?.access_token ?? "",
      };
      console.log(requestBody);
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
              label="Middle name"
              placeholder="Middle name"
              name="middle_name"
              value={formik.values.middle_name}
              onChange={formik.handleChange}
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
            {/* <TextField
              required
              id="outlined-required"
              label="ID number"
              placeholder="ID number"
              disabled={areInputDisabled}
            /> */}
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              select
              label="Specialization"
              placeholder="Surgeon"
              name="specialisation_id"
              value={formik.values.specialisation_id}
              onChange={formik.handleChange}
              error={
                formik.touched.specialisation_id &&
                Boolean(formik.errors.specialisation_id)
              }
              helperText={
                formik.touched.specialisation_id &&
                formik.errors.specialisation_id
              }
              disabled={areInputDisabled}
            >
              {SPECIALIZATIONS.map((specialization, index) => (
                <MenuItem value={index}>{specialization}</MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="outlined-required"
              select
              label="Department"
              placeholder="Medicine"
              name="department_id"
              value={formik.values.department_id}
              onChange={formik.handleChange}
              error={
                formik.touched.department_id &&
                Boolean(formik.errors.department_id)
              }
              helperText={
                formik.touched.department_id && formik.errors.department_id
              }
              disabled={areInputDisabled}
            >
              {DEPARTMENTS.map((department_id, index) => (
                <MenuItem value={index}>{department_id}</MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Experience"
              name="experience"
              value={formik.values.experience}
              onChange={formik.handleChange}
              error={
                formik.touched.experience && Boolean(formik.errors.experience)
              }
              helperText={formik.touched.experience && formik.errors.experience}
              disabled={areInputDisabled}
            />
            <TextField
              required
              id="outlined-required"
              select
              label="Category"
              placeholder="First"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category}
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
              name="schedule_id"
              value={formik.values.schedule_id}
              onChange={formik.handleChange}
              error={
                formik.touched.schedule_id && Boolean(formik.errors.schedule_id)
              }
              helperText={
                formik.touched.schedule_id && formik.errors.schedule_id
              }
              disabled={areInputDisabled}
            >
              {SCHEDULES.map((schedule_id, index) => (
                <MenuItem value={index}>{schedule_id}</MenuItem>
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
              name="education"
              value={formik.values.education}
              onChange={formik.handleChange}
              error={
                formik.touched.education && Boolean(formik.errors.education)
              }
              helperText={formik.touched.education && formik.errors.education}
              disabled={areInputDisabled}
            >
              {degrees.map((education) => (
                <MenuItem value={education}>{education}</MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="outlined-required"
              label="Rating"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
              name="rating"
              value={formik.values.rating}
              onChange={formik.handleChange}
              error={formik.touched.rating && Boolean(formik.errors.rating)}
              helperText={formik.touched.rating && formik.errors.rating}
              disabled={areInputDisabled}
            />
          </div>
          <div>
            <TextField
              label="Homepage URL"
              placeholder="Homepage URL"
              name="url"
              value={formik.values.url}
              onChange={formik.handleChange}
              helperText={formik.touched.url && formik.errors.url}
              disabled={areInputDisabled}
            />
            <TextField
              label="Upload photo"
              placeholder="Upload photo"
              name="photo"
              value={formik.values.photo}
              onChange={formik.handleChange}
              error={formik.touched.photo && Boolean(formik.errors.photo)}
              helperText={formik.touched.photo && formik.errors.photo}
              disabled={areInputDisabled}
            />
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
            <Button
              sx={{ ml: "auto" }}
              variant="text"
              onClick={onCancel}
            >
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
