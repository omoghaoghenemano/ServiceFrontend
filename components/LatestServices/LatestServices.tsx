import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../pages/state";
import { RootState } from "../../pages/state/reducers";
import Card from "@mui/material/Card";
import { useRouter } from "next/router";
import {
  StyledLink,
  StyledCard,
  StyledTypographyHeader,
  StyledButton,
} from "./styles";
type Props = {};
const LatestServices: React.FC<Props> = ({}) => {
  const state = useSelector((state: RootState) => state.appstate);
  const route = useRouter();
  console.log(
    "hey this is the state for the latest services",
    state.mainservices
  );
  return (
    <div>
      <Paper elevation={2} sx={{ height: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "red",
            marginTop: "10px",
          }}
        >
          <Typography
            variant="h5"
            style={{ fontFamily: "serif", color: "white" }}
          >
            Latest Services
          </Typography>
          <Typography
            variant="button"
            onClick={() => {
              route.push("/all-services");
            }}
            style={{
              fontFamily: "serif",
              position: "absolute",
              textTransform: "none",
              right: 0,
              color: "white",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            See All
          </Typography>
        </div>
        <div className="flexitems__avalableservice">
          {state.mainservices?.map(
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
              },
              i: string | number | any
            ) => (
              <div
                key={Math.random()}
                style={{
                  marginLeft: "1%",
                  position: "relative",
                }}
              >
                <StyledCard elevation={2}>
                  <StyledLink /* href={"/categories?list=" + item?.categories_id} */
                    sx={{ textDecoration: "none", color: "#000" }}
                    onClick={() => {
                      /*   route.push("/categories?services=" + item?.categories_id); */
                    }}
                  >
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
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
                      <br></br>

                      <StyledButton size="small">
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
  );
};
export default LatestServices;
