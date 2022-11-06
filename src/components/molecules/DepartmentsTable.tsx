import {
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";

import { DEPARTMENTS } from "@app/constants";

export const DepartmentsTable = () => {
  return (
    <TableContainer sx={{ width: "400px" }}>
      <Table>
        <TableHead sx={{ borderBottom: "2px solid black" }}>
          <TableRow>
            <TableCell sx={{ width: "100px" }} align="center">
              №
            </TableCell>
            <TableCell align="center">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {DEPARTMENTS.map((name, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
