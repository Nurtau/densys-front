import { style } from "@vanilla-extract/css";

export const inputStyle = style({
  display: "inline-block",
  position: "absolute",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
});

export const containerStyle = style({
  display: "block",
  width: "200px",
  height: "200px",
  position: "relative",
  borderRadius: "50%",
  backgroundColor: "hsl(0deg 0% 100%)",
  border: "1px solid black",
  transition: "background-color 0.3s",
  overflow: "hidden",
  flexShrink: "0",
  ":hover": {
    backgroundColor: "hsl(0deg 0% 90%)",
  },
});

export const imageStyle = style({
  display: "block",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  objectFit: "cover",
});

export const uploadSignWrapper = style({
  position: "absolute",
  height: "50px",
  width: "100%",
  bottom: 0,
  left: 0,
  backgroundColor: "hsl(0deg 0% 0% / 0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: " center",
});
