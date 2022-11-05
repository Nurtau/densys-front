import { Box, Button, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "4rem",
        margin: "auto",
        marginTop: "80px",
      }}
    >
      <Box>
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          REDEFINING
          <span style={{ display: "block" }}>EXCELLENCE</span>
        </Typography>
        <Typography
          variant="h5"
          sx={{ width: "27.5rem", marginTop: "16px", marginBottom: "64px" }}
        >
          The million patients we treat each year in DenSys.me prepares us to
          treat the one who matters most — you.
        </Typography>
        <Button variant="contained">Make an appoinment</Button>
      </Box>
      <Box>
        <img
          src="/doctor-photo.png"
          width={425}
          height={650}
          alt="doctor photo"
        />
      </Box>
    </Box>
  );
}
