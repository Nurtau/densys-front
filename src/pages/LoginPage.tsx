import React from "react";
import { Link } from "react-router-dom";

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

export default function LoginPage() {
  const { changeToken } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    const api = new UserLoginApi();

    const { access_token } = await api.login({
      adminLogin: {
        username: data.get("email") as string,
        password: data.get("password") as string,
      },
    });

    if (access_token) {
      changeToken(access_token);
    }
  };

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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
