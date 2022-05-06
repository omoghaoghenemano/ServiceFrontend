import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { RootState } from "../../state/reducers";
import Card from "@mui/material/Card";
import { useRouter } from "next/router";
import {
  StyledLink,
  StyledCard,
  StyledTypographyHeader,
  StyledButton,
} from "./styles";
import {
  StyledAbout,
  StyledPriceValue,
  StyledPrice,
} from "../Categories/styles";
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
          <Paper elevation={2} sx={{ height: "100%" }}>
            <div
              style={{
                display: "flex",

                background: "#E2F5FF",
                marginTop: "10px",
              }}
            >
              <Typography variant="h5" style={{ fontFamily: "serif" }}>
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
                            alignItems: "center",
                            width: "255px",
                          }}
                        >
                          <img
                            src={item.image}
                            style={{
                              width: "150px",
                              marginTop: "10px",
                              borderRadius: "100%",
                              border: " 4px solid whitesmoke",
                              height: "150px",
                              cursor: "pointer",
                            }}
                          />
                          <br></br>
                          <StyledTypographyHeader
                            style={{ fontFamily: "serif", fontSize: "0.9rem" }}
                          >
                            {item.type}
                          </StyledTypographyHeader>
                          <StyledTypographyHeader
                            style={{
                              fontFamily: "serif",
                              textAlign: "center",
                              fontSize: "0.9rem",
                            }}
                          >
                            {item.name}
                          </StyledTypographyHeader>

                          <StyledAbout>
                            {item?.about.slice(0, 30)}...
                          </StyledAbout>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <StyledPrice>Price: </StyledPrice>
                            <StyledPriceValue>${item?.price}</StyledPriceValue>
                          </div>
                          <StyledButton
                            size="small"
                            onClick={() => {
                              route.push("/services?user=" + item?.services_id);
                            }}
                          >
                            {" "}
                            Talk to {item.name}
                          </StyledButton>
                        </div>
                      </StyledLink>
                    </StyledCard>
                  </div>
                )
              )}
            </div>
          </Paper>
          <br></br>
        </div>
      </div>
    </div>
  );
};
export default LatestServices;
