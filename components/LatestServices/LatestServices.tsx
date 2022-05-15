import React, { useState, useContext, useEffect } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { RootState } from "../../state/reducers";
import Card from "@mui/material/Card";
import { Avatar, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { LoginModal } from "../LoginModal/Loginmodal";
import { useRouter } from "next/router";

import MenuIcon from "@mui/icons-material/Menu";
import moment from "moment";

import {
  StyledLink,
  StyledCard,
  StyledTypographyHeader,
  StyledPriceValue,
  TextTypography,
  StyledPrice,
  StyledButton,
  StyledTypography,
  StyledCustomTypography,
  StyledBox,
} from "./styles";
import { StyledAbout } from "../Categories/styles";
type Props = {};
const LatestServices: React.FC<Props> = ({}) => {
  const state = useSelector((state: RootState) => state.appstate);
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch: Dispatch<any> = useDispatch();
  const [open, setOpen] = useState(false);

  const route = useRouter();
  const handleLogin = AuthState.user;
  const handleOpen = () => {
    if (handleLogin === null || handleLogin === undefined) {
      setLoggedIn(false);
      setOpen(true);
    } else {
      setLoggedIn(true);
      setOpen(false);
    }
  };

  return (
    <div className="navbar__mycontainer">
      <div className="navbar__catwrapper">
        <div style={{ width: "80%" }}>
          <Paper elevation={2} sx={{ height: "110%" }}>
            <StyledBox>
              <StyledCustomTypography
                variant="h5"
                style={{ marginLeft: "2%", fontFamily: "serif" }}
              >
                Latest Services
              </StyledCustomTypography>
            </StyledBox>
            <div className="flexitems__latestservices">
              {state.mainservices.slice(0, 9)?.map(
                (
                  item: {
                    type:
                      | boolean
                      | React.ReactChild
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                    categories_id: number;
                    image: any;
                    name: string;
                    services_id: number;
                    about: string;
                    price: number;
                    updated_at: string;
                  },
                  i: string | number | any
                ) => (
                  <div
                    key={Math.random()}
                    style={{
                      position: "relative",
                      marginLeft: "1%",
                    }}
                  >
                    <StyledCard key={Math.random()} elevation={6}>
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <img
                            src={item.image}
                            style={{ height: "200px", width: "100%" }}
                          ></img>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "4%",
                            marginTop: "2%",
                          }}
                        >
                          <div style={{ display: "flex" }}>
                            <span>
                              <Avatar />
                            </span>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <span>
                                <TextTypography>{item.name}</TextTypography>
                              </span>
                              <span>
                                <TextTypography>
                                  {moment(item.updated_at).format("MMM Do ")}
                                </TextTypography>
                              </span>
                            </div>
                          </div>
                          <span>
                            <StyledTypography>{item.type}</StyledTypography>
                            <StyledTypographyHeader>
                              {item.about}
                            </StyledTypographyHeader>
                          </span>
                          <div
                            style={{
                              height: "50px",
                              background: "#949593",
                              opacity: "73%",
                              width: "114%",
                              marginLeft: "-4.5%",
                              display: "flex",
                              marginTop: "5%",
                              justifyContent: "flex-end",
                              alignSelf: "flex-end",
                              justifyItems: "flex-end",

                              alignItems: "flex-end",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                width: "100%",
                                alignSelf: "flex-end",

                                justifyContent: "space-evenly",
                                alignItems: "center",
                              }}
                            >
                              <IconButton onClick={handleOpen}>
                                <FavoriteBorderIcon />
                              </IconButton>

                              <StyledPrice> STARTING AT</StyledPrice>
                              <StyledPriceValue>${item.price}</StyledPriceValue>
                            </div>
                          </div>
                        </div>
                      </div>
                    </StyledCard>
                  </div>
                )
              )}
              <LoginModal
                OpenModalForm={open}
                CloseModalForm={() => setOpen(false)}
              />{" "}
            </div>
          </Paper>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};
export default LatestServices;
