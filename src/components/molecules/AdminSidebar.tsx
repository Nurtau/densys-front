import { Drawer, List, Divider, ListItem, ListItemText } from "@mui/material";

import { LogoName } from "@app/components";

const SIDEBAR_SECTIONS = [
  "Patients",
  "Doctors",
  "Departments",
  "Specializations",
] as const;

const SIDEBAR_WIDTH = 240;

export const AdminSidebar = () => {
  return (
    <Drawer
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: SIDEBAR_WIDTH,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <LogoName />
      <Divider />
      <List>
        {SIDEBAR_SECTIONS.map((section, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText primary={section} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
