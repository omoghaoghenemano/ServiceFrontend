import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
type Props = {};
const LatestServices: React.FC<Props> = ({}) => {
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
          <div>
            <Card sx={{ background: "red" }}>new</Card>
          </div>
          <Typography variant="h5" style={{ fontFamily: "serif" }}>
            Latest Services
          </Typography>
        </div>
      </Paper>
    </div>
  );
};
export default LatestServices;
