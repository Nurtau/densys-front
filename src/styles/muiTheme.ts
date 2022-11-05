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
    h1: {
      fontSize: "5.7rem",
      fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 800,
    },
    body1: {
      fontSize: "1rem",
    },
    h5: {
      fontSize: "1.5rem",
      lineHeight: 1.4,
      fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
    },
    h6: {
      fontSize: "1.125rem",
      lineHeight: 1,
      fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    subtitle2: {
      fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 800,
      fontSize: "1.375rem",
      lineHeight: 1,
    },
  },
});
