import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import {
  Container,
  Typography,
  AppBar,
  Box,
  Toolbar,
  Button,
  TextField,
  Modal,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Logo } from "@app/ui";
//@TODO change to just useAuth
import { useAdminAuth } from "@app/auth";
import { ModalInnerContainer } from "@app/components/atoms";

export const NavBar = () => {
  const { accessToken, deleteToken } = useAdminAuth();
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
      </Container>
      <Modal open={searchOpen} onClose={closeSearchModal}>
        <ModalInnerContainer>Cool</ModalInnerContainer>
      </Modal>
    </>
  );
};
