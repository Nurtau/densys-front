import { Box } from "@mui/material";

interface ModalInnerContainerProps {
  children?: React.ReactNode;
}

export const ModalInnerContainer = ({ children }: ModalInnerContainerProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        minWidth: 600,
        bgcolor: "background.paper",
        boxShadow: 2,
        borderRadius: 2,
        p: 4,
      }}
    >
      {children}
    </Box>
  );
};
