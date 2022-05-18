import React, { useState, useContext, useEffect } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import CustomLoader from "../CustomLoader";
import ToggleButton from "@mui/material/ToggleButton";

import {
  StyledLink,
  StyledCard,
  StyledTypographyHeader,
  StyledPriceValue,
  TextTypography,
  StyledPrice,
  StyledButton,
  StyledTypography,
  StyledIconButton,
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
  const [loaded, setLoaded] = useState(true);
  const [active, setActive] = useState(false);

  const route = useRouter();
  const handleLogin = AuthState.user;
  const [buttoncolor, setButtoncolor] = useState<any>(false);
  const handleColor = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  const [activeButton, setActiveButton] = useState([]);

  const handleOpen = () => {
    if (handleLogin === null || handleLogin === undefined) {
      setLoggedIn(false);
      setOpen(true);
    } else {
      setLoggedIn(true);
      handleColor();
      setOpen(false);
      setButtoncolor(true);
    }
  };

  useEffect(() => {
    if (state.mainservices === null || state.mainservices.length < 0) {
      setLoaded(true);
    } else if (state.mainservices.length > 0) {
      setLoaded(false);
    }
  });

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
            {loaded ? (
              <Skeleton
                count={6}
                inline
                height={300}
                containerClassName="flexitems__latestservices"
                style={{
                  marginLeft: "15px",
                  borderRadius: "0.5rem",

                  justifyContent: "center",
                  marginTop: "10px",
                }}
                width={"90%"}
              />
            ) : (
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
                      key={item.services_id}
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
                                background: "#152238",

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
                                <StyledIconButton
                                  key={item.services_id}
                                  onClick={handleOpen}
                                >
                                  <FavoriteBorderIcon />
                                </StyledIconButton>

                                <StyledPrice> STARTING AT</StyledPrice>
                                <StyledPriceValue>
                                  ${item.price}
                                </StyledPriceValue>
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
            )}
          </Paper>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};
export default LatestServices;
