import React, { useState, useContext } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Paper from "@mui/material/Paper";
import { Typography, List, Link, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Clientapi from "../../pages/api/client";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { StyledLink } from "./styles";

type Props = {
  services: any;
};

const serviceimages = [
  "IT services.jpeg",
  "Cleaning services.jpeg",
  "event services.jpeg",
  "entertainment services.jpeg",
  "kidandtoy.jpeg",
  "automotive services.jpeg",
  "building & trade services.jpeg",
  "legal services.jpeg",
  "health & beauty services.jpeg",
  "landscaping & gardening services.jpeg",
  "logistics services.jpeg",
  "printing services.jpeg",
  "photography & video services.jpeg",
  "wedding events services.jpeg",
  "repair services.jpeg",
  "fitness services.jpeg",
  "Pet services...jpeg",
  "travel agent & tour services.jpeg",
  "classes & courses services.jpeg",
  "manufacturing services.jpeg",
  "chauffeur & airport services.jpeg",
];

const AvailableService = (props: Props) => {
  const [checkhover, setCheckhover] = useState(false);
  const [current, setCurrent] = useState(0);
  const length = props.services.length;
  const route = useRouter();
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  function nextSlide() {
    setCurrent(current === length - 10 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  const handleMousehover = (
    event: React.MouseEventHandler<HTMLDivElement> | undefined
  ) => {
    setCheckhover(true);
  };
  const handleMouseClose = (
    event: React.MouseEventHandler<HTMLDivElement> | undefined
  ) => {
    setCheckhover(false);
  };

  return (
    <div>
      <Paper elevation={2}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Typography variant="h5" style={{ fontFamily: "serif" }}>
            Service Categories
          </Typography>
        </div>
        <div className="flexitems__avalableservice">
          {/*  {checkhover && (
            <div
              style={{
                display: "flex",
                position: "absolute",
                zIndex: 100,
                marginTop: "80px",

                width: "100%",

                justifyContent: " space-between",
              }}
            >
              <IconButton sx={{ background: "black", color: "white" }}>
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton sx={{ background: "black", color: "white" }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          )} */}
          {AuthState.categorydata?.map(
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
              },
              i: string | number | any
            ) => (
              <div
                key={Math.random()}
                style={{ marginLeft: "1%", position: "relative" }}
              >
                <StyledLink /* href={"/categories?list=" + item?.categories_id} */
                  sx={{ textDecoration: "none", color: "#000" }}
                  onClick={() => {
                    route.push("/categories?services=" + item?.categories_id);
                  }}
                >
                  {" "}
                  <img
                    src={serviceimages[i]}
                    style={{
                      width: "200px",
                      borderRadius: "13px",
                      height: "200px",
                      cursor: "pointer",
                    }}
                  />
                  <Typography
                    style={{ fontFamily: "serif", fontSize: "0.9rem" }}
                  >
                    {item.type}
                  </Typography>
                </StyledLink>
              </div>
            )
          )}
        </div>
      </Paper>
    </div>
  );
};

export default AvailableService;
