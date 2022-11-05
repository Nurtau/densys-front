import { TextField, MenuItem, type TextFieldProps } from "@mui/material";

const bloodGroups = ["A", "B", "AB", "O"];

export const SelectBloodGroup = (props: TextFieldProps) => {
  return (
    <TextField
      id="outlined-select-role"
      select
      label="Blood group"
      placeholder="A"
      {...props}
    >
      {bloodGroups.map((bloodType) => (
        <MenuItem value={bloodType}>{bloodType}</MenuItem>
      ))}
    </TextField>
  );
};
