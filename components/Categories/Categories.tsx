/* import React from "react";

import { useRouter } from "next/router";
import Layout from "./layout";
import { Typography } from "@mui/material";

type Props = {};

const categories = (props: Props) => {
  const route = useRouter();
  const query = route.query;
  const handle = query["list"];
  console.log("the query handle is ", handle);
  return (
    <Layout>
      <div style={{ marginTop: "50px" }}>
        <Typography variant="h1">
          hey your category id is {handle} and we are waiting for woke
        </Typography>
      </div>
    </Layout>
  );
};
export default categories;
 */
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import MailIcon from "@mui/icons-material/Mail";
import { MenuItem } from "@mui/material";

const drawerWidth = 240;

export default function Categories() {
  return (
    <div style={{ position: "relative" }}>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: "19rem",

            flexShrink: 0,

            "& .MuiDrawer-paper": {
              width: "85%",
              boxSizing: "border-box",
              height: "100%",

              position: "static",
              overflowY: "scroll",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Divider />
          <Toolbar />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ marginLeft: "6%" }}>Services</Typography>
            <Typography sx={{ marginLeft: "8%" }}>IT Services</Typography>
            <Typography sx={{ marginLeft: "8%" }}>Cleaning Services</Typography>
            <Typography sx={{ marginLeft: "8%" }}>Event Services</Typography>
            <Typography sx={{ marginLeft: "8%" }}>
              Entertainment Services
            </Typography>
            <Typography sx={{ marginLeft: "8%" }}>Show all</Typography>
          </div>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Typography paragraph>waiting for demo DATA from woke</Typography>
        </Box>
      </Box>
    </div>
  );
}
