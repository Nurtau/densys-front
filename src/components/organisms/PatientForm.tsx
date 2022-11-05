import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import {
  ModalInnerContainer,
  SelectBloodGroup,
  SelectMaritalStatus,
} from "@app/components/atoms";

export const PatientForm = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-07"));

  return (
    <ModalInnerContainer>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <h1>Patient Form</h1>
        <div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Name"
              placeholder="Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Surname"
              placeholder="Surname"
            />
          </div>
          <div>
            <TextField
              id="outlined-not-required"
              label="Middle name"
              placeholder="Middle name"
            />
            <TextField
              required
              id="outlined-required"
              label="Phone number"
              placeholder="+7 707 000 00 00"
            />
          </div>
          <div>
            <DesktopDatePicker
              label="Birth date"
              value={value}
              minDate={dayjs("2017-01-01")}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <TextField
              required
              id="outlined-required"
              label="IIN number"
              placeholder="IIN number"
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="ID number"
              placeholder="ID number"
            />
            <TextField
              required
              id="outlined-required"
              label="Address"
              placeholder="Address"
            />
          </div>
          <div>
            <SelectBloodGroup />
            <SelectMaritalStatus />
          </div>
          <div>
            <TextField
              label="Emergency phone number"
              placeholder="+7 707 000 00 00"
            />
            <TextField label="Email" placeholder="example@gmail.com" />
          </div>
          <div>
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
            />
            <TextField
              required
              id="outlined-password-input"
              label="Confirm password"
              type="password"
              autoComplete="current-password"
              placeholder="Confirm password"
            />
          </div>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              mt: "20px",
            }}
          >
            <Button sx={{ ml: "auto" }} type="submit" variant="text">
              CANCEL
            </Button>
            <Button sx={{ mr: "8px" }} type="submit" variant="contained">
              CREATE
            </Button>
          </Box>
          </div>
      </Box>
    </ModalInnerContainer>
  );
};
