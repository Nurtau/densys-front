import { useState } from "react";
import { TextField, MenuItem } from "@mui/material";

const bloodGroups = ["A", "B", "AB", "O"];

export const SelectBloodGroup = () => {
  const [bloodGroup, setBloodGroup] = useState("A");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBloodGroup(event.target.value);
  };

  return (
    <TextField
      id="outlined-select-role"
      select
      label="Select"
      value={bloodGroup}
      onChange={handleChange}
      helperText="Please select your blood type"
    >
      {bloodGroups.map((bloodType) => (
        <MenuItem>{bloodType}</MenuItem>
      ))}
    </TextField>
  );
};
