import React from "react";
import { Paper, Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  StyledTypography,
  StyledBox,
  StyledDiv,
  StyledHeaderTypo,
  StyledTypographySub,
  StyledIconButton,
} from "./styles";
import { StyledHeader } from "../Categories/styles";
export default function TopCategories() {
  return (
    <div className="navbar__mycontainer">
      <StyledBox>
        <StyledTypography>Top Category</StyledTypography>
      </StyledBox>

      <div className="navbar__catwrapper">
        <StyledDiv>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
              }}
            >
              <img
                alt="construction"
                src="road.jpg"
                style={{
                  borderTopLeftRadius: "250px",
                  borderTopRightRadius: "250px",
                  height: "300px",
                  width: "100%",
                }}
              />
              <div style={{ background: "#EEEEF5" }}>
                <StyledHeaderTypo>Remodel</StyledHeaderTypo>
                <StyledTypographySub>
                  Use this space to tell people more about what you do or a
                  featured service.
                </StyledTypographySub>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginRight: "4%",
                  }}
                >
                  <StyledIconButton sx={{ background: "black" }}>
                    <ArrowForwardIcon
                      sx={{
                        color: "white",

                        fontSize: "15px",
                      }}
                    />
                  </StyledIconButton>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
              }}
            >
              <img
                alt="computer"
                src="itservices.jpg"
                style={{
                  borderTopLeftRadius: "250px",
                  borderTopRightRadius: "250px",
                  height: "300px",
                  width: "100%",
                }}
              />
              <div style={{ background: "#EEEEF5" }}>
                <StyledHeaderTypo>ReShape</StyledHeaderTypo>
                <StyledTypographySub>
                  Use this space to tell people more about what you do or a
                  featured service.
                </StyledTypographySub>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginRight: "4%",
                  }}
                >
                  <StyledIconButton sx={{ background: "black" }}>
                    <ArrowForwardIcon
                      sx={{
                        color: "white",

                        fontSize: "15px",
                      }}
                    />
                  </StyledIconButton>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
              }}
            >
              <img
                alt="design"
                src="design.jpg"
                style={{
                  borderTopLeftRadius: "250px",
                  borderTopRightRadius: "250px",
                  height: "300px",
                  width: "100%",
                }}
              />
              <div style={{ background: "#EEEEF5" }}>
                <StyledHeaderTypo>Redesign</StyledHeaderTypo>
                <StyledTypographySub>
                  Use this space to tell people more about what you do or a
                  featured service.
                </StyledTypographySub>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginRight: "4%",
                  }}
                >
                  <StyledIconButton sx={{ background: "black" }}>
                    <ArrowForwardIcon
                      sx={{
                        color: "white",

                        fontSize: "15px",
                      }}
                    />
                  </StyledIconButton>
                </div>
              </div>
            </div>
          </div>
        </StyledDiv>
      </div>
    </div>
  );
}
