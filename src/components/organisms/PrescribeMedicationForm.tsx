import dayjs from "dayjs";
import { useFormik } from "formik";
import * as yup from "yup";
import { useQueryClient } from "react-query";
import { Box, TextField, Button } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

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
  const date = new Date();

  const formik = useFormik<
    Omit<PrescriptionCreate, "doctor_id" | "patient_id">
  >({
    initialValues: {
      name: "",
      start_date: date.toISOString(),
      end_date: dayjs("2023-01-01").toDate().toISOString(),
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <DesktopDatePicker
          label="Start date"
          renderInput={(params) => <TextField {...params} />}
          value={dayjs(formik.values.start_date)}
          onChange={(value) =>
            formik.setFieldValue("start_date", value?.toDate())
          }
        />
        <DesktopDatePicker
          label="End date"
          renderInput={(params) => <TextField {...params} />}
          value={dayjs(formik.values.end_date)}
          onChange={(value) =>
            formik.setFieldValue("end_date", value?.toDate())
          }
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
