import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { rowStyles, infoBoxStyles } from "./SpecializationsPageTable.css";
import { SPECIALIZATIONS } from "@app/constants";

export const SpecializationsPageTable = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "72px 160px",
      }}
    >
      <Box sx={{ mb: "30px" }}>
        <Typography variant="h4">Specializations</Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        {SPECIALIZATIONS.map((name, index) => (
          <Link to="/specializations/doctors">
            <div className={rowStyles}>{name}</div>
          </Link>
        ))}
      </Box>
    </Box>
  );
};
