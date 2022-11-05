import { useState } from "react";
import { TextField, MenuItem } from "@mui/material";

const maritalStatus = ["Married", "Single"];

export const SelectMaritalStatus = () => {
  const [status, setStatus] = useState("Married");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  return (
    <TextField
      id="outlined-select-role"
      select
      label="Marital status"
      placeholder="Married"
      value={status}
      onChange={handleChange}
      helperText="Please select your marital status"
    >
      {maritalStatus.map((status) => (
        <MenuItem>{status}</MenuItem>
      ))}
    </TextField>
  );
};
