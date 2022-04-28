import { useState, useEffect } from "react";

import { Box, Fade, Modal, Paper, Typography } from "@mui/material";
import Signin from "../Signin";
// make login reusable
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  
  borderRadius:"5px"

};
const LoginModal = (props) => {
  return (
    <Modal
      open={props.OpenModalForm}
      onClose={props.CloseModalForm}
     
    >
      <Box sx={style}>
        <Paper sx={{background:"rgb(218, 218, 218)" }}>
        <Signin/>

        </Paper>
      </Box>
    </Modal>
  );
};
export default LoginModal;
