import { style } from "@vanilla-extract/css";

export const profileBoxStyles = style({
  maxWidth: "1000px",
  width: "100%",
  margin: "auto",
  display: "flex",
  marginTop: "64px",
  justifyContent: "space-around",
});

export const photoBoxStyles = style({
  width: "400px",
  borderRadius: "50%",
  overflow: "hidden",
});

export const photoStyles = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const infoBoxStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
