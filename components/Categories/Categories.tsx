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
import { StyledTypography, StyledLink } from "./styles";

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
            <StyledLink>
              <StyledTypography sx={{ marginLeft: "6%" }}>
                Services
              </StyledTypography>
            </StyledLink>
            <StyledLink>
              <StyledTypography sx={{ marginLeft: "8%" }}>
                IT Services
              </StyledTypography>
            </StyledLink>
            <StyledLink>
              <StyledTypography sx={{ marginLeft: "8%" }}>
                Cleaning Services
              </StyledTypography>
            </StyledLink>
            <StyledLink>
              <StyledTypography sx={{ marginLeft: "8%" }}>
                Event Services
              </StyledTypography>
            </StyledLink>
            <StyledLink>
              <StyledTypography sx={{ marginLeft: "8%" }}>
                Entertainment Services
              </StyledTypography>
            </StyledLink>
            <StyledLink>
              <StyledTypography sx={{ marginLeft: "8%" }}>
                Show all
              </StyledTypography>
            </StyledLink>
          </div>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <StyledTypography paragraph>
            waiting for demo DATA from woke
          </StyledTypography>
        </Box>
      </Box>
    </div>
  );
}
