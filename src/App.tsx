import { Routes, Route } from "react-router-dom";

import { Container, Toolbar } from "@mui/material";

import { NavBar } from "@app/components";
import HomePage from "@app/pages/HomePage";
import LoginPage from "@app/pages/LoginPage";
import SignupPage from "@app/pages/SignupPage";

export default function App() {
  return (
    <Container maxWidth="xl" sx={{ padding: "16px" }}>
      <NavBar />
      <Toolbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
        </Routes>
      </Toolbar>
    </Container>
  );
}
