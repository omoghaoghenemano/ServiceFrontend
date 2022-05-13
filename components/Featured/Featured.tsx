import React from "react";
import { StyledDiv, StyledDivider, StyledTypography } from "./styles";
import { Divider, Typography } from "@mui/material";

export default function Featured() {
  return (
    <div style={{ background: "#C5C7C4", marginTop: "1%", height: "100px" }}>
      <div className="navbar__mycontainer">
        <div className="navbar__catwrapper">
          <StyledDiv>
            <StyledTypography>Trusted by</StyledTypography>
            <StyledDivider orientation="vertical" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                justifyItems: "center",
                width: "50%",
              }}
            >
              <StyledTypography>Pay pal</StyledTypography>
              <StyledTypography>Google</StyledTypography>
              <StyledTypography>Amazon</StyledTypography>
            </div>
          </StyledDiv>
        </div>
      </div>
    </div>
  );
}
