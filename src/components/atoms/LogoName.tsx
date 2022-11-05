import { Typography, Box } from "@mui/material";

import { Logo } from "@app/ui";

export const LogoName = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Logo />
      <Typography variant="subtitle2" component="div" color="primary.main">
        DenSys.me
      </Typography>
    </Box>
  );
};
