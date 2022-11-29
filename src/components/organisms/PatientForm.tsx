import dayjs from "dayjs";
import * as yup from "yup";
import { useFormik } from "formik";
import { Box, TextField, Button, Switch, Typography } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useState } from "react";

import { api, type PatientCreate, type PatientPublic } from "@app/api";

import { useAdminAuth } from "@app/auth";
import {
  ModalInnerContainer,
  SelectBloodGroup,
  SelectMaritalStatus,
} from "@app/components/atoms";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
  iin: yup.number().required("IIN is required"),
  government_id: yup.number().required("ID number is required"),
  contact_number: yup.string().required("Contact number is required"),
  day_of_birth: yup.date().required("Day of birth is required"),
  blood_group: yup.string().required("Blood group is required"),
  emergency_contact_number: yup.string().required("It is is required"),
  email: yup.string().required("Email is required"),
  address: yup.string().required("Address is required"),
  password: yup
    .string()
    .min(7, "Password should be of minimum 7 characters length")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

interface PatientFormBaseProps {
  onCancel(): void;
  onPatientChange(): void;
}

interface PatientCreateFormProps {
  mode: "creation";
  patient?: never;
}

interface PatientModifyFormProps {
  mode: "modification";
  patient: PatientPublic;
}

type PatientFormProps = PatientFormBaseProps &
  (PatientCreateFormProps | PatientModifyFormProps);

export const PatientForm = ({
  onCancel,
  mode,
  patient,
  onPatientChange,
}: PatientFormProps) => {
  const [isRequestPending, setIsRequestPending] = useState(false);
  const [modify, setModify] = useState(false);
  const { accessToken } = useAdminAuth();

  const areInputDisabled = mode === "modification" && !modify;

  const formik = useFormik<
    Omit<PatientCreate, "access_token" | "registration_date"> & {
      passwordConfirmation: string;
    }
  >({
    initialValues: {
      name: "",
      surname: "",
      middle_name: "",
      iin: "",
      contact_number: "+7",
      blood_group: "A",
      emergency_contact_number: "+7",
      government_id: "",
      address: "",
      email: "",
      password: "",
      day_of_birth: dayjs("2001-01-01").toDate(),
      passwordConfirmation: "",
      marital_status: undefined,
      ...patient,
    },
    validationSchema: validationSchema,
    onSubmit: async ({ passwordConfirmation, day_of_birth, ...data }) => {
      const requestBody: PatientCreate = {
        ...data,
        day_of_birth: day_of_birth.toJSON().substring(0, 10) as any,
        access_token: accessToken?.access_token ?? "",
        registration_date: (patient?.registration_date ?? new Date())
          .toJSON()
          .substring(0, 10) as any,
      };
      try {
        if (mode === "modification") {
          setIsRequestPending(true);
          await api.updatePatient(requestBody);
          onPatientChange();
        } else {
          setIsRequestPending(true);
          await api.createPatient(requestBody);
          onPatientChange();
        }
      } catch (error) {
        console.log(error);
        setIsRequestPending(false);
      }
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
            Patient Form
          </Typography>
          {mode === "modification" && (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "column",
              }}
            >
              <Typography variant="body1">Modification mode</Typography>
              <Switch
                checked={modify}
                onChange={(e) => setModify(e.target.checked)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          )}
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
              disabled={areInputDisabled}
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
              disabled={areInputDisabled}
            />
          </div>
          <div>
            <TextField
              id="outlined-not-required"
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
              name="government_id"
              value={formik.values.government_id}
              onChange={formik.handleChange}
              error={
                formik.touched.government_id &&
                Boolean(formik.errors.government_id)
              }
              helperText={
                formik.touched.government_id && formik.errors.government_id
              }
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
            <SelectBloodGroup
              name="blood_group"
              value={formik.values.blood_group}
              onChange={formik.handleChange}
              error={
                formik.touched.blood_group && Boolean(formik.errors.blood_group)
              }
              helperText={
                formik.touched.blood_group && formik.errors.blood_group
              }
              disabled={areInputDisabled}
            />
            <SelectMaritalStatus
              name="marital_status"
              value={formik.values.marital_status}
              onChange={formik.handleChange}
              error={
                formik.touched.marital_status &&
                Boolean(formik.errors.marital_status)
              }
              helperText={
                formik.touched.marital_status && formik.errors.marital_status
              }
              disabled={areInputDisabled}
            />
          </div>
          <div>
            <TextField
              required
              label="Emergency phone number"
              placeholder="+7 707 000 00 00"
              name="emergency_contact_number"
              value={formik.values.emergency_contact_number}
              onChange={formik.handleChange}
              error={
                formik.touched.emergency_contact_number &&
                Boolean(formik.errors.emergency_contact_number)
              }
              helperText={
                formik.touched.emergency_contact_number &&
                formik.errors.emergency_contact_number
              }
              disabled={areInputDisabled}
            />
            <TextField
              label="Email"
              placeholder="example@gmail.com"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
            <Button sx={{ ml: "auto" }} variant="text" onClick={onCancel}>
              CANCEL
            </Button>
            <Button
              sx={{ mr: "8px" }}
              type="submit"
              variant="contained"
              disabled={areInputDisabled || isRequestPending}
            >
              {mode === "creation" ? "CREATE" : "SAVE"}
            </Button>
          </Box>
        </div>
      </Box>
    </ModalInnerContainer>
  );
};
