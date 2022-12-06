import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import {
  Container,
  Typography,
  AppBar,
  Box,
  Toolbar,
  Button,
  Modal,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Logo } from "@app/ui";
import { useMe } from "@app/auth";

import { DoctorSearchModal } from "./DoctorSearchModal";

export const NavBar = () => {
  const { me, removeMe } = useMe();
  const [searchOpen, setSearchOpen] = useState(false);

  const location = useLocation();

  if (location.pathname.startsWith("/admin")) return null;

  const openSearchModal = () => {
    setSearchOpen(true);
  };

  const closeSearchModal = () => {
    setSearchOpen(false);
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ padding: "16px" }}>
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
                  <Link to="/specializations">Specializations</Link>
                </Typography>
                <Typography variant="h6" component="div">
                  <Link to="/doctors">Doctors</Link>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                gap: "42px",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                startIcon={<SearchIcon />}
                onClick={openSearchModal}
                sx={{ width: "200px", justifyContent: "start" }}
              >
                Search
              </Button>
              {!me && (
                <>
                  <Typography variant="h6" component="div">
                    <Link to="/login">Login</Link>
                  </Typography>
                </>
              )}
              {me && (
                <>
                  <Typography variant="h6" component="div">
                    <Link
                      to={`/profile/${me.role}${
                        me.role === "patient" ? `/${me.user.iin}` : ""
                      }`}
                    >
                      Profile
                    </Link>
                  </Typography>
                  <Button onClick={removeMe}>Log out</Button>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
      <Modal open={searchOpen} onClose={closeSearchModal}>
        <DoctorSearchModal closeModal={closeSearchModal} />
      </Modal>
    </>
  );
};
