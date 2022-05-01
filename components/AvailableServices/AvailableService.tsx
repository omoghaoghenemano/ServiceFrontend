import React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
type Props = {};

const AvailableService = (props: Props) => {
  return (
    <div>
      <Paper
        elevation={2}
        sx={{
          height: 400,
          width: "97%",
          marginLeft: "1.5%",
          marginTop: "20px",
          background: "whitesmoke",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5" style={{ fontFamily: "serif" }}>
            Available Service for you
          </Typography>
        </div>
      </Paper>
    </div>
  );
};
export default AvailableService;
