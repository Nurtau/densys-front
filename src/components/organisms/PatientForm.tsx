import dayjs, { Dayjs } from 'dayjs';
import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import {
  ModalInnerContainer,
  SelectBloodGroup,
  SelectMaritalStatus,
} from "@app/components";

export const PatientForm = () => {
const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-07'));

  return (
    <ModalInnerContainer>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h1>Patient Form</h1>
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
          <TextField
            id="outlined-not-required"
            label="Middle name"
            placeholder="Middle name"
          />
          <TextField
            required
            id="outlined-required"
            label="Phone number"
            placeholder="Phone number"
          />
          <DesktopDatePicker
          label="For desktop"
          value={value}
          minDate={dayjs('2017-01-01')}
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
          <SelectBloodGroup />
          <SelectMaritalStatus />
          <TextField
            label="Emergency phone number"
            placeholder="Emergency phone number"
          />
          <TextField label="Email" placeholder="Email" />
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
      </Box>
    </ModalInnerContainer>
  );
};
