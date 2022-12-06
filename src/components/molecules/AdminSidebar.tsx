import { useLocation, Link } from "react-router-dom";

import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Button,
} from "@mui/material";
import {
  PeopleAltOutlined,
  BadgeOutlined,
  BusinessOutlined,
  MedicalServicesOutlined,
  PendingActions,
} from "@mui/icons-material";

import { useAdminAuth } from "@app/auth";
import { Logo } from "@app/ui";

const SIDEBAR_SECTIONS = [
  {
    text: "Patients",
    icon: <PeopleAltOutlined />,
    path: "/admin/patients",
  },
  {
    text: "Doctors",
    icon: <BadgeOutlined />,
    path: "/admin/doctors",
  },
  {
    text: "Departments",
    icon: <BusinessOutlined />,
    path: "/admin/departments",
  },
  {
    text: "Specializations",
    icon: <MedicalServicesOutlined />,
    path: "/admin/specializations",
  },
  {
    text: "Pending appointments",
    icon: <PendingActions />,
    path: "/admin/pending-appointments",
  },
] as const;

const SIDEBAR_WIDTH = 240;

export const AdminSidebar = () => {
  const { deleteToken } = useAdminAuth();
  const location = useLocation();

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
      <Box sx={{ py: "20px", mx: "auto" }}>
        <Logo />
      </Box>
      <Divider />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <List>
          {SIDEBAR_SECTIONS.map(({ text, icon, path }, index) => (
            <ListItem key={index} disablePadding>
              <Link to={path} style={{ width: "100%" }}>
                <ListItemButton
                  selected={location.pathname === path}
                  component="div"
                >
                  <ListItemIcon color="#1F2AD6">{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Button sx={{ m: 3 }} variant="outlined" onClick={deleteToken}>
          Logout
        </Button>
      </Box>
    </Drawer>
  );
};
