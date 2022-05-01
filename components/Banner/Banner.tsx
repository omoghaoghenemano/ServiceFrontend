import { Button, Typography } from "@mui/material";
import React from "react";
import { StyledButton } from "./styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import Clientapi from "../../pages/api/client";
import Cookies from "js-cookie";

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

  return (
    <div style={{ background: "black" }}>
      <img
        style={{
          opacity: 0.3,
          objectFit: "cover",
          overflow: "hidden",
          position: "relative",
          background: "blue",
          width: "100%",
          height: "400px",
        }}
        src="banner.jpg"
      ></img>
      <div style={{ position: "absolute", top: "20%", right: "35%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "white", fontFamily: "serif" }} variant="h4">
            WELCOME TO THE FUTURE
          </Typography>
          <Typography
            align="center"
            sx={{ color: "white", fontFamily: "serif" }}
            variant="h6"
          >
            The best reliable service{" "}
          </Typography>
          <Typography
            align="center"
            sx={{ color: "white", fontFamily: "serif" }}
            variant="h6"
          >
            Explore latest advertisement both nearby and faraway{" "}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10%",
          }}
        >
          <StyledButton endIcon={<ArrowForwardIosIcon />}>
            Checkout latest advertisement
          </StyledButton>
        </div>
      </div>
    </div>
  );
}
