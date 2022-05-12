import React from "react";
import { Paper, Box, Typography } from "@mui/material";

export default function TopCategories() {
  return (
    <div className="navbar__container">
      <div className="navbar__mainwrapper">
        <Box sx={{ width: "100%" }}>
          <Typography>Top Category</Typography>
        </Box>
      </div>
    </div>
  );
}
