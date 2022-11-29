import { style } from "@vanilla-extract/css";

export const rowStyles = style({
  display: "flex",
  borderBottom: "1px solid hsl(100deg, 10%, 50%)",
  height: "72px",
  padding: "0 8px",
  alignItems: "center",
  width: "50%",
  gap: "12px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#B4D5FE",
  }
});

export const infoBoxStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});