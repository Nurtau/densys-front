import { style } from "@vanilla-extract/css";

export const rowStyles = style({
  display: "flex",
  borderBottom: "1px solid hsl(100deg, 10%, 50%)",
  height: "86px",
  padding: "0 8px",
  alignItems: "center",
  gap: "16px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#B4D5FE",
  },
});

export const infoBoxStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});
