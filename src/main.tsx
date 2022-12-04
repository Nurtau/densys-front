import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { AdminAuthProvider, AuthProvider } from "@app/auth";
import { DepartmentsProvider } from "@app/components/molecules";
import { muiTheme } from "@app/styles";
import "@app/styles/globals.css";

import App from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={muiTheme}>
        <AdminAuthProvider>
          <AuthProvider>
            <QueryClientProvider client={queryClient}>
              <DepartmentsProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </DepartmentsProvider>
            </QueryClientProvider>
          </AuthProvider>
        </AdminAuthProvider>
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
