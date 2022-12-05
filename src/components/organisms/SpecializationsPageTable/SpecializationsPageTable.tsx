import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { rowStyles } from "./SpecializationsPageTable.css";
import { useSpecialisations } from "@app/components/molecules";

export const SpecializationsPageTable = () => {
  const specialisations = useSpecialisations();

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
      <Box>
        {specialisations.map(({ name, id }) => (
          <Link to={`/specializations/${id}`}>
            <div key={id} className={rowStyles}>
              {name}
            </div>
          </Link>
        ))}
      </Box>
    </Box>
  );
};
