import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton, Paper } from "@mui/material";

import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Button from "@mui/material/Button";
import Clientapi from "../../pages/api/client";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { RootState } from "../../state/reducers";
import Card from "@mui/material/Card";
import { SideBar } from "../SideBar/SideBar";

import {
  StyledTypography,
  StyledLink,
  CustomDrawer,
  StyledHeader,
  StyledAbout,
  StyledPriceValue,
  StyledPrice,
  StyledButton,
  StyledCard,
} from "./styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { HomeRepairServiceSharp } from "@mui/icons-material";

const drawerWidth = 240;

export default function Categories() {
  const route = useRouter();
  const query = route.query;
  const [cardmouse, setCardmouse] = useState(1);
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const lessvalue = AuthState.categorydata?.slice(0, 5);
  const showall = AuthState.categorydata?.length - 5;
  //the disptached data
  const dispatch: Dispatch<any> = useDispatch();
  //bind action

  const state = useSelector((state: RootState) => state.appstate);
  const [cat, setCat] = useState<number>();
  const [services, setServices] = useState([]);

  const handle = query["services"];
  console.log("the handle is ", handle);
  const { storeservices } = bindActionCreators(actionCreators, dispatch);
  const Mouseover = () => {
    setCardmouse(10);
  };
  const MouseOut = () => {
    setCardmouse(1);
  };

  function getIsbriskpackage() {
    Clientapi.get("/api/company/categories")
      .then((response) => {
        const offer = response.data.filter(
          (items: any) => items?.categories_id == handle
        );
        storeservices(offer);
        setServices(offer);
        console.log("the services data is ", services);
        console.log("fecthing the response data", response.data);
      })
      .catch((error) => {});
  }

  useEffect(() => {
    if (state.services.length <= 0) {
      Clientapi.get("/api/company/categories")
        .then((response) => {
          const offer = response.data.filter(
            (items: any) => items?.categories_id == handle
          );
          storeservices(offer);
          setServices(offer);
          console.log("the services data is ", services);
          console.log("fecthing the response data", response.data);
        })
        .catch((error) => {});
    } else {
      getIsbriskpackage();
    }
    console.log("the service data is", services);
  }, []);
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
          <div style={{ position: "relative" }}>
            <SideBar lessvalue={lessvalue} showall={showall} />
          </div>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              marginRight: "22px",
              p: 1,
              borderRadius: "12px",
            }}
          >
            <div className="product__gridval">
              {state.services?.map(
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
                    about: string | null | undefined | any;
                    title: string | null | undefined | any;
                    services_id: number;
                  },
                  i: string | number | any
                ) => {
                  const styledelevation = [cardmouse];
                  return (
                    <StyledCard
                      key={item.services_id}
                      sx={{ width: "270px" }}
                      onClick={() => {
                        console.log("you clicked on me", item.services_id);
                      }}
                    >
                      <img
                        src={item?.image}
                        style={{
                          height: "150px",
                          width: "90%",
                          display: "flex",
                          justifyContent: "center",
                          marginLeft: "10px",

                          marginTop: "10px",
                          borderRadius: "10px",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "end",
                          justifyItems: "end",
                          justifyContent: "center",
                        }}
                      >
                        <StyledHeader>{item?.title}</StyledHeader>
                        {/* maintain the state when the icon is clicked */}
                        <IconButton>
                          <FavoriteBorderIcon />
                        </IconButton>
                      </div>
                      <StyledAbout>{item?.about.slice(0, 30)}...</StyledAbout>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <StyledPrice>Price: </StyledPrice>
                        <StyledPriceValue>${item?.price}</StyledPriceValue>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <StyledButton size="small" variant="contained">
                          Make an Offer
                        </StyledButton>
                      </div>
                    </StyledCard>
                  );
                }
              )}
            </div>
          </Box>
        </Box>
        <div style={{ marginTop: "40%" }}></div>
      </div>
    </>
  );
}
