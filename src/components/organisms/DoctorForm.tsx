import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { Box, TextField, Button, MenuItem } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { ModalInnerContainer } from "@app/components/atoms";
import { DEPARTMENTS, SPECIALIZATIONS } from "@app/constants";

const categories = ["Highest", "First", "Second"];
const degrees = ["Highest", "First", "Second"];
const schedules = ["Day", "Night"];

export const DoctorForm = () => {
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
        <h1>Doctor Form</h1>
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
              required
              id="outlined-required"
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
            <TextField
              required
              id="outlined-required"
              select
              label="Specialization"
              placeholder="Surgeon"
            >
              {SPECIALIZATIONS.map((specialization) => (
                <MenuItem value={specialization}>{specialization}</MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="outlined-required"
              select
              label="Department"
              placeholder="Medicine"
            >
              {DEPARTMENTS.map((department) => (
                <MenuItem value={department}>{department}</MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField required id="outlined-required" label="Experience" />
            <TextField
              required
              id="outlined-required"
              select
              label="Category"
              placeholder="First"
            >
              {categories.map((category) => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Price"
              placeholder="Price"
            />
            <TextField
              required
              id="outlined-required"
              select
              label="Schedule"
              placeholder="Day"
            >
              {schedules.map((schedule) => (
                <MenuItem value={schedule}>{schedule}</MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              select
              label="Degree"
              placeholder="First"
            >
              {degrees.map((degree) => (
                <MenuItem value={degree}>{degree}</MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="outlined-required"
              label="Rating"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
          </div>
          <div>
            <TextField label="Homepage URL" placeholder="Homepage URL" />
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
