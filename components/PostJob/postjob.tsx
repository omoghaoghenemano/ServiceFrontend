import React from "react";
import { TextField, Button } from "@mui/material";

type Props = {};

const Postjob: React.FC<Props> = ({}) => {
  return (
    <div
      className="postjob"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "15%",
        position: "absolute",
        height: "500px",
        left: "3%",
        background: "orange",
      }}
    >
      <TextField />

      <Button> Explore Services</Button>
    </div>
  );
};
export default Postjob;
