import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { StyledTypography, StyledBox } from "./styles";
export default function TopCategories() {
  return (
    <div className="navbar__container">
      <StyledBox>
        <StyledTypography>Top Category</StyledTypography>
      </StyledBox>
      <div className="navbar__mainwrapper"></div>
    </div>
  );
}
