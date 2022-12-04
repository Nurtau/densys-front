import {
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";

import { type Department } from "@app/api";

interface DepartmentsTableProps {
  departments: Department[];
}

export const DepartmentsTable = ({ departments }: DepartmentsTableProps) => {
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
          {departments.map(({ name, id }) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{id}</TableCell>
              <TableCell align="center">{name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
