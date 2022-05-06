import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import Categories from "../Categories/Categories";

type Props = {};

const Postjob: React.FC<Props> = ({}) => {
  return (
    <div className="side-nav-categories">
      <div className="title">
        <Typography
          sx={{ color: "white", textAlign: "center", marginTop: "4px" }}
        >
          Categories
        </Typography>
      </div>
    </div>
  );
};
export default Postjob;
