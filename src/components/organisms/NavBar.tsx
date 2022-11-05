import { Link, useLocation } from "react-router-dom";

import { Typography, AppBar, Box, Toolbar, Button } from "@mui/material";

import { Logo } from "@app/ui";
import { useAuth } from "@app/auth";

export const NavBar = () => {
  const { accessToken, deleteToken } = useAuth();
  const location = useLocation();

  if (accessToken && location.pathname.startsWith("/admin")) return null;

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        background: "white",
        color: "black",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            flexDirection: "row",
            display: "flex",
            gap: "42px",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <Logo />
          </Link>
          <Box sx={{ flexDirection: "row", display: "flex", gap: "64px" }}>
            <Typography variant="h6" component="div">
              <Link to="/services">Services</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/contacts">Contacts</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/about-us">About us</Link>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flexDirection: "row", display: "flex", gap: "42px" }}>
          {!accessToken && (
            <>
              <Typography variant="h6" component="div">
                <Link to="/login">Login</Link>
              </Typography>
              <Typography variant="h6" component="div">
                <Link to="/sign-up">Sign up</Link>
              </Typography>
            </>
          )}
          {accessToken && <Button onClick={deleteToken}>Log out</Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
