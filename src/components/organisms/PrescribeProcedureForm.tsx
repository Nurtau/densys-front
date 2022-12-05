import { useFormik } from "formik";
import * as yup from "yup";
import { useQueryClient } from "react-query";
import { Box, TextField, Button } from "@mui/material";

import {
  api,
  type DoctorPublic,
  type PatientListed,
  type ProcedureCreate,
} from "@app/api";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  date: yup.string().required("Start date is required"),
  cost: yup.string().required("End date is required"),
});

interface PrescribeProcedureFormProps {
  doctor: DoctorPublic;
  patient: PatientListed;
  onCreate(): void;
  onCancel(): void;
}

export const PrescribeProcedureForm = ({
  doctor,
  patient,
  onCreate,
  onCancel,
}: PrescribeProcedureFormProps) => {
  const queryClient = useQueryClient();

  const formik = useFormik<
    Omit<ProcedureCreate, "doctor_id" | "patient_id">
  >({
    initialValues: {
      name: "",
      date: "",
      cost: 0,
    },
    validationSchema: validationSchema,
    onSubmit: async (data) => {
      const requestBody: ProcedureCreate = {
        ...data,
        doctor_id: doctor.id!,
        patient_id: patient.id,
      };
      const response = await api.prescribeProcedure(
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
          label="Date"
          placeholder="31/12/2000"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
          sx={{ mb: 2 }}
        />
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Cost"
          placeholder="31/12/2000"
          type="number"
          name="cost"
          value={formik.values.cost}
          onChange={formik.handleChange}
          error={formik.touched.cost && Boolean(formik.errors.cost)}
          helperText={formik.touched.cost && formik.errors.cost}
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
