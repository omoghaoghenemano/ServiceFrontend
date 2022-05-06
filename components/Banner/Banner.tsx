import { Button, Typography } from "@mui/material";
import React from "react";
import { StyledButton } from "./styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import Clientapi from "../../pages/api/client";
import Cookies from "js-cookie";

import SimpleImageSlider from "react-simple-image-slider";
import AvailableServices from "../AvailableServices";
import PostJob from "../PostJob/postjob";

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
  const images = [
    { url: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1" },
    { url: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1" },
    { url: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1" },
    { url: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1" },
    { url: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1" },
    { url: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1" },
    { url: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1" },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "7%",

          marginTop: "3%",
        }}
      >
        <PostJob />
        <SimpleImageSlider
          style={{ borderRadius: "12px" }}
          width={"70%"}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </>
  );
}
