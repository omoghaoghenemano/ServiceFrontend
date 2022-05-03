/* import React from "react";
type Props = {};

const categories = (props: Props) => {
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
import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Clientapi from "../../pages/api/client";
import { StyledTypography, StyledLink } from "./styles";

const drawerWidth = 240;

export default function Categories() {
  const route = useRouter();
  const query = route.query;
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const lessvalue = AuthState.categorydata?.slice(0, 5);
  const showall = AuthState.categorydata?.length - 5;
  const [usercategoriesdata, setUsercategoriesdata] = useState([]);
  const [cat, setCat] = useState<number>();

  const handle = query["list"];
  console.log("the handle is ", handle);
  function getIsbriskpackage() {
    Clientapi.get("/api/company/categories")
      .then((response) => {
        const offer = response.data.filter(
          (items: any) => items?.categories_id == handle
        );
        console.log("the filtered data is", offer);

        console.log("fecthing the response data", response.data);
      })
      .catch((error) => {});
  }
  getIsbriskpackage();
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
            {lessvalue?.map(
              (
                item: {
                  type:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                },
                i: string | number | any
              ) => (
                <StyledLink key={Math.random()}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignSelf: "self-end",
                    }}
                  >
                    <StyledTypography
                      style={{
                        fontFamily: "serif",

                        fontSize: "0.9rem",
                      }}
                    >
                      {item?.type}
                    </StyledTypography>
                  </div>
                </StyledLink>
              )
            )}
            <StyledLink>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <StyledTypography sx={{ textDecoration: "underline" }}>
                  {" "}
                  Show all ({showall})
                </StyledTypography>
              </div>
            </StyledLink>
          </div>
          <Divider />
          <StyledTypography> Location</StyledTypography>
          <StyledLink>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <StyledTypography> Nigeria </StyledTypography>
            </div>
          </StyledLink>
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
      <div style={{ marginTop: "40%" }}></div>
    </div>
  );
}
