import {
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";

import { type PatientPublic } from "@densys/api-client";

interface PatientsTableProps {
  patients: PatientPublic[];
}

export const PatientsTable = ({ patients }: PatientsTableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead sx={{ borderBottom: "2px solid black" }}>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Contact number</TableCell>
            <TableCell align="center">Date of birth</TableCell>
            <TableCell align="center">IIN number</TableCell>
            <TableCell align="center">ID number</TableCell>
            <TableCell align="center">Registration date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map(
            ({
              name,
              contact_number,
              day_of_birth,
              iin,
              registration_date,
            }) => (
              <TableRow
                key={iin}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">{contact_number}</TableCell>
                <TableCell align="center">
                  {day_of_birth.toLocaleDateString()}
                </TableCell>
                <TableCell align="center">{iin}</TableCell>
                <TableCell align="center">{"ID shold be here"}</TableCell>
                <TableCell align="center">
                  {registration_date?.toLocaleDateString()}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
