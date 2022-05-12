import { Button, Typography } from "@mui/material";
import React from "react";
import {
  StyledButton,
  StyledTypography,
  SubTypography,
  StyledTextField,
  StyledDiv,
  StyledDivButton,
} from "./styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import Clientapi from "../../pages/api/client";
import Cookies from "js-cookie";

import SimpleImageSlider from "react-simple-image-slider";
import AvailableServices from "../AvailableServices";
import PostJob from "../PostJob/postjob";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import Postadvertisment from "../Postadvertisement/postadvertisement";

type Props = {};

export default function Banner({}: Props) {
  /*   const applications = {
    name:"admin",
    email:"kennf2fswdwwos@gmail.com",
     passwords:"nonrwwdfdfdfded"
}
  React.useEffect(() => {
    Clientapi.post('api/company/register',applications)
  .then(response => {
    console.log("it worked hurray")
    console.log("the response data is ", response)
    console.log("auth_token",Cookies.set("auth_token",response))

  })
  
 
  }, []) */

  const state = useSelector((state: RootState) => state.appstate);
  return (
    <>
      <br></br>
      <div className="maindiv">
        <div style={{ position: "relative", marginTop: "50px" }}>
          <img src="construction.jpg"></img>
          <div
            style={{
              position: "absolute",
              width: "100%",
              bottom: "10%",
              display: "flex",

              alignItems: "center",

              flexDirection: "column",
            }}
          >
            <StyledTypography>Great Services</StyledTypography>{" "}
            <SubTypography>
              Every service you can think of in one space
            </SubTypography>
            <br></br>
            <StyledTextField
              placeholder="Find Service"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              size="small"
              variant="outlined"
              color="primary"
            />
            <StyledDiv>
              <StyledDivButton>It Services</StyledDivButton>
              <StyledDivButton> Events</StyledDivButton>
              <StyledDivButton>Cleaning</StyledDivButton>
            </StyledDiv>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Avenir Light",
              fontSize: "15px",
              color: "#626462",
            }}
          >
            Welcome to a place where you find reliable services
          </Typography>
        </div>
      </div>
    </>
  );
}
