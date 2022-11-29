import { style } from "@vanilla-extract/css";

export const modalBoxStyles = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "60vh",
  overflow: "auto",
  transform: "translate(-50%, -50%)",
  minWidth: "600px",
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "32px",
});
