import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { RootState } from "../../state/reducers";
import Card from "@mui/material/Card";
import { Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import {
  StyledLink,
  StyledCard,
  StyledTypographyHeader,
  StyledPriceValue,
  StyledPrice,
  StyledButton,
} from "./styles";
import { StyledAbout } from "../Categories/styles";
type Props = {};
const LatestServices: React.FC<Props> = ({}) => {
  const state = useSelector((state: RootState) => state.appstate);
  const route = useRouter();
  console.log(
    "hey this is the state for the latest services",
    state.mainservices
  );
  return (
    <div className="maindiv">
      <div className="maindivwrapper">
        <div style={{ width: "100%" }}>
          <Paper elevation={2} sx={{ height: "110%" }}>
            <div
              style={{
                display: "flex",

                background: "#E2F5FF",
                marginTop: "10px",
              }}
            >
              <Typography
                variant="h5"
                style={{ marginLeft: "2%", fontFamily: "serif" }}
              >
                Latest Services
              </Typography>
              <div
                style={{
                  display: "flex",

                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  variant="button"
                  onClick={() => {
                    route.push("/all-services");
                  }}
                  style={{
                    fontFamily: "serif",
                    position: "absolute",
                    textTransform: "none",
                    right: "6%",
                    color: "white",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  See All
                </Typography>
              </div>
            </div>
            <div className="flexitems__latestservices">
              {state.mainservices.slice(0, 7)?.map(
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
                      <StyledLink /* href={"/categories?list=" + item?.categories_id} */
                        sx={{ textDecoration: "none", color: "#000" }}
                        onClick={() => {
                          route.push("/services?user=" + item?.services_id);
                        }}
                      >
                        {" "}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",

                            width: "255px",
                          }}
                        >
                          <img
                            src={item.image}
                            style={{
                              width: "100%",

                              height: "200px",
                              cursor: "pointer",
                            }}
                          />
                          <br></br>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",

                              marginLeft: "5px",
                            }}
                          >
                            <Avatar sx={{ height: "40px" }}></Avatar>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <StyledTypographyHeader
                                style={{
                                  fontFamily: "serif",

                                  fontSize: "0.9rem",
                                  marginLeft: "4px",
                                }}
                              >
                                {item.name}
                              </StyledTypographyHeader>{" "}
                              <StyledTypographyHeader
                                style={{
                                  fontFamily: "serif",

                                  fontSize: "0.9rem",
                                  fontWeight: "normal",
                                  marginLeft: "4px",
                                }}
                              >
                                {item.type}
                              </StyledTypographyHeader>
                            </div>
                          </div>
                          <br></br>

                          <StyledAbout>
                            {item?.about.slice(0, 30)}...
                          </StyledAbout>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "5px",
                              color: "orange",
                            }}
                          >
                            <StarIcon />
                            <p>4.9(52)</p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginLeft: "5px",
                              alignItems: "flex-end",
                              background: "#fff",
                            }}
                          >
                            <div style={{ display: "flex", color: "grey" }}>
                              <MenuIcon />
                              <FavoriteBorderIcon />
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                justifyItems: "flex-end",

                                marginRight: "15px",
                              }}
                            >
                              <StyledPrice sx={{ color: "grey" }}>
                                STARTING AT:{" "}
                              </StyledPrice>
                              <StyledPriceValue>
                                ${item?.price}
                              </StyledPriceValue>
                            </div>
                          </div>
                        </div>
                      </StyledLink>
                    </StyledCard>
                  </div>
                )
              )}
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
