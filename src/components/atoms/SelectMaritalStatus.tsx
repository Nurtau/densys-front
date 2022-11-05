import { TextField, MenuItem, type TextFieldProps } from "@mui/material";

const maritalStatus = [
  { text: "Married", value: true },
  { text: "Single", value: false },
];

export const SelectMaritalStatus = (props: TextFieldProps) => {
  return (
    <TextField
      id="outlined-select-role"
      select
      label="Marital status"
      placeholder="Married"
      {...props}
    >
      {maritalStatus.map(({ text, value }) => (
        <MenuItem value={value as any}>{text}</MenuItem>
      ))}
    </TextField>
  );
};
