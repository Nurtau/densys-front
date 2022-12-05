import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#1F2AD6",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#000000",
      secondary: "rgba(0,0,0,0.7)",
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "5.7rem",
      fontWeight: 800,
    },
    body1: {
      fontSize: "1rem",
    },
    h5: {
      fontSize: "1.5rem",
      lineHeight: 1.4,
      fontWeight: 300,
    },
    h6: {
      fontSize: "1.125rem",
      lineHeight: 1,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "0.85rem",
      textDecoration: "underline",
    },
    subtitle2: {
      fontWeight: 800,
      fontSize: "1.375rem",
      lineHeight: 1,
    },
  },
});
