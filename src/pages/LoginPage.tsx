import { Link, Navigate, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  MenuItem,
} from "@mui/material";

import {
  api,
  type PatientPublic,
  type DoctorPublic,
  type OthersLogin,
} from "@app/api";
import { LogoName } from "@app/components/atoms";
import { ROLES } from "@app/constants";
import { useMe } from "@app/auth";

const validationSchema = yup.object({
  iin: yup.string().required("IIN is required"),
  role: yup.string().required("Role is required"),
  password: yup
    .string()
    .min(7, "Password should be of minimum 7 characters length")
    .required("Password is required"),
});

export default function LoginPage() {
  const { me, updateMe } = useMe();

  const navigate = useNavigate();

  const formik = useFormik<{ role: string } & OthersLogin>({
    initialValues: {
      iin: undefined as any,
      role: ROLES[1],
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async ({ iin, role, password }) => {
      const user = await api.login(role, {
        iin,
        password,
      });

      console.log(user);

      if (role === "patient") {
        updateMe({
          role,
          user: user as PatientPublic,
        });
      } else if (role === "doctor") {
        updateMe({
          role,
          user: user as DoctorPublic,
        });
      }

      navigate("/");
    },
  });

  if (me) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 18,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LogoName />
        <Typography sx={{ marginTop: 2 }} component="h1" variant="subtitle2">
          Sign in to your DenSys.me account
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 4 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <TextField
              required
              fullWidth
              type="number"
              id="iin"
              label="IIN"
              name="iin"
              autoFocus
              autoComplete="username"
              value={formik.values.iin}
              onChange={formik.handleChange}
              error={formik.touched.iin && Boolean(formik.errors.iin)}
              helperText={formik.touched.iin && formik.errors.iin}
            />
            <TextField
              sx={{ width: "200px" }}
              required
              id="outlined-required"
              select
              label="Role"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              error={formik.touched.role && Boolean(formik.errors.role)}
              helperText={formik.touched.role && formik.errors.role}
            >
              {ROLES.map((role) => (
                <MenuItem value={role} key={role}>
                  {role}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid item sx={{ textAlign: "center" }}>
            <Typography variant="subtitle1" component="div">
              <Link to="/sign-up">Don't have an account? Sign Up</Link>
            </Typography>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
