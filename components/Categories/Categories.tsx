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
import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Clientapi from "../../pages/api/client";
import { StyledTypography, StyledLink, CustomDrawer } from "./styles";
import { HomeRepairServiceSharp } from "@mui/icons-material";

const drawerWidth = 240;

export default function Categories() {
  const route = useRouter();
  const query = route.query;
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const lessvalue = AuthState.categorydata?.slice(0, 5);
  const showall = AuthState.categorydata?.length - 5;

  const [cat, setCat] = useState<number>();
  const [services, setServices] = useState([]);

  const handle = query["services"];
  console.log("the handle is ", handle);

  function getIsbriskpackage() {
    Clientapi.get("/api/company/categories")
      .then((response) => {
        const offer = response.data.filter(
          (items: any) => items?.categories_id == handle
        );
        setServices(offer);
        console.log("the services data is ", services);

        console.log("fecthing the response data", response.data);
      })
      .catch((error) => {});
  }
  useEffect(() => {
    getIsbriskpackage();
  }, [services]);
  //the wrapper should be fixed for services
  return (
    <>
      <div
        style={{
          display: "flex",

          top: "12%",
          left: "-2.5%",
          position: "absolute",
        }}
      >
        <div className="listitem__mainlist">
          <ul>
            <li>Home</li>
          </ul>
        </div>
        <div className="listitem">
          <ul>
            <li>Services</li>
          </ul>
        </div>
      </div>
      <div>
        <Box sx={{ display: "flex", marginTop: "7%" }}>
          <CustomDrawer variant="permanent" anchor="left">
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
          </CustomDrawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              p: 1,
              borderRadius: "12px",
            }}
          >
            <Toolbar />
            <div>
              {services?.map(
                (
                  item: {
                    type:
                      | boolean
                      | React.ReactChild
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                    name: string | null | undefined;
                    price: number;
                    image: string | null | undefined | any;
                  },
                  i: string | number | any
                ) => (
                  <div>
                    <StyledTypography paragraph>
                      waiting for demo DATA from woke{item?.name} {item?.price}{" "}
                      {item.type}
                    </StyledTypography>
                    <img src={item?.image} style={{ height: "100px" }} />
                  </div>
                )
              )}
            </div>
          </Box>
        </Box>
        <div style={{ marginTop: "40%" }}></div>
      </div>
    </>
  );
}
