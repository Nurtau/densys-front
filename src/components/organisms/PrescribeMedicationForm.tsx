import { useFormik } from "formik";
import * as yup from "yup";
import { useQueryClient } from "react-query";
import { Box, Typography, TextField, Button } from "@mui/material";

import {
  api,
  type DoctorPublic,
  type PatientListed,
  type PrescriptionCreate,
} from "@app/api";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  start_date: yup.string().required("Start date is required"),
  end_date: yup.string().required("End date is required"),
});

interface PrescribeMedicationFormProps {
  doctor: DoctorPublic;
  patient: PatientListed;
  onCreate(): void;
  onCancel(): void;
}

export const PrescribeMedicationForm = ({
  doctor,
  patient,
  onCreate,
  onCancel,
}: PrescribeMedicationFormProps) => {
  const queryClient = useQueryClient();

  const formik = useFormik<
    Omit<PrescriptionCreate, "doctor_id" | "patient_id">
  >({
    initialValues: {
      name: "",
      start_date: "",
      end_date: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (data) => {
      const requestBody: PrescriptionCreate = {
        ...data,
        doctor_id: doctor.id!,
        patient_id: patient.id,
      };
      const response = await api.prescribeMedication(
        { token: doctor.access_token?.access_token ?? "" },
        requestBody
      );
      queryClient.invalidateQueries(["doctor_history"]);
      console.log(response);
      onCreate();
    },
  });

  return (
    <Box
      component="form"
      sx={{
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
      ></Box>
      <div>
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Name"
          placeholder="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ mb: 2 }}
        />
      </div>
      <div>
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Start date"
          placeholder="31/12/2000"
          name="start_date"
          value={formik.values.start_date}
          onChange={formik.handleChange}
          error={formik.touched.start_date && Boolean(formik.errors.start_date)}
          helperText={formik.touched.start_date && formik.errors.start_date}
          sx={{ mb: 2 }}
        />
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="End date"
          placeholder="31/12/2000"
          name="end_date"
          value={formik.values.end_date}
          onChange={formik.handleChange}
          error={formik.touched.end_date && Boolean(formik.errors.end_date)}
          helperText={formik.touched.end_date && formik.errors.end_date}
          sx={{ mb: 2 }}
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
    </Box>
  );
};
