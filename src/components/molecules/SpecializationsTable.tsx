import {
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";

import { type Specialisation } from "@app/api";

interface SpecialisationsTableProps {
  specialisations: Specialisation[];
}

export const SpecializationsTable = ({
  specialisations,
}: SpecialisationsTableProps) => {
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
          {specialisations.map(({ name, id }) => (
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
