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
} from "@mui/material";

import { UserLoginApi } from "@densys/api-client";

import { useAuth } from "@app/auth";
import { LogoName } from "@app/components/atoms";

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(7, "Password should be of minimum 7 characters length")
    .required("Password is required"),
});

export default function LoginPage() {
  const { accessToken, changeToken } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async ({ username, password }) => {
      const api = new UserLoginApi();

      const { access_token } = await api.login({
        adminLogin: {
          username,
          password,
        },
      });

      if (access_token) {
        console.log(access_token);
        changeToken(access_token);
        navigate("/admin/patients");
      }
    },
  });

  if (accessToken) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container component="main" maxWidth="xs">
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
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            autoComplete="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
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
