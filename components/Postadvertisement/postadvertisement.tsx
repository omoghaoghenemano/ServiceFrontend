import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import Categories from "../Categories/Categories";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { useState } from "react";
type Props = {
  checkuser?: any;
};

const Postadvertisement: React.FC<Props> = ({ checkuser }) => {
  const [testuser, setTestuser] = useState<boolean>(false);
  React.useEffect(() => {
    if (checkuser === undefined || checkuser === null) setTestuser(true);
  });

  return (
    <div className="side-nav-categories">
      <div className="title1">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <AddBoxRoundedIcon sx={{ width: "200px", height: "120px" }} />
          <Typography variant="body1" color="white">
            {" "}
            {testuser ? (
              <>Post an Advertisement</>
            ) : (
              <>Welcome {checkuser} Post an Advert</>
            )}
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Postadvertisement;
