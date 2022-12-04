import { useFormik } from "formik";
import * as yup from "yup";
import { useQueryClient } from "react-query";
import { Box, Typography, TextField, Button } from "@mui/material";

import { ModalInnerContainer } from "@app/components/atoms";
import { api, type Department } from "@app/api";

interface AppointmentFormProps {
  onCancel(): void;
  onCreate(): void;
}

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
});

export const DepartmentForm = ({
  onCancel,
  onCreate,
}: AppointmentFormProps) => {
  const queryClient = useQueryClient();

  const formik = useFormik<Omit<Department, "id">>({
    initialValues: {
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (data) => {
      const requestBody: Department = {
        ...data,
        id: Date.now(),
      };
      await api.createDepartment(requestBody);
      queryClient.invalidateQueries(["departments"]);
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
            Department Form
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
