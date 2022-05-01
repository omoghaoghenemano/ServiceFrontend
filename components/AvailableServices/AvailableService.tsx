import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Typography, List, IconButton } from "@mui/material";
import Clientapi from "../../pages/api/client";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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

  function nextSlide() {
    setCurrent(current === length - 10 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  const handleMousehover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCheckhover(true);
  };
  const handleMouseClose = (event: React.MouseEvent<HTMLButtonElement>) => {
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
            Available Service for you
          </Typography>
        </div>
        <Paper
          sx={{
            marginTop: "10px",
            display: "flex",
            overflow: "scroll",
          }}
          onMouseOver={handleMousehover}
          onMouseOut={handleMouseClose}
        >
          {checkhover && (
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
          )}
          {props.services?.map((item, i) => (
            <div
              key={Math.random()}
              style={{ marginLeft: "1%", position: "relative" }}
            >
              <img
                src={serviceimages[i]}
                style={{
                  width: "200px",
                  borderRadius: "13px",
                  height: "200px",
                }}
              />

              <Typography style={{ fontFamily: "serif", fontSize: "0.9rem" }}>
                {item.type}
              </Typography>
            </div>
          ))}
        </Paper>
      </Paper>
    </div>
  );
};

export default AvailableService;
