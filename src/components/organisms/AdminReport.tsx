import { useQuery } from "react-query";
import { Box, Typography } from "@mui/material";

import { api } from "@app/api";

export const AdminReport = () => {
  const { data } = useQuery("report", () =>
    api.patientsForPeriod({ start_date: "01/01/2001", end_date: "10/10/2023" })
  );

  console.log(data);

  return (
    <div>
      <Box>
        <Typography variant="h4">Report</Typography>
      </Box>
    </div>
  );
};
