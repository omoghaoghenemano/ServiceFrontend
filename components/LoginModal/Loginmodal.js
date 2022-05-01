import { useState, useEffect, useContext } from "react";
import Clientapi from "../../pages/api/client";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import { Box, Fade, Modal,IconButton, Paper, Typography } from "@mui/material";
import Signin from "../Signin";
import CloseIcon from "@mui/icons-material/Close";
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
  const { AuthState } = useContext(StateContext);
  const { AuthDispatcher } = useContext(DispatchContext);
  const [open,setOpen] = useState(false)
  
  const fetchuser = () =>{
    Clientapi.get("api/user").then((response) => {
      const user = response.data;
      AuthDispatcher({ type: "login" });
      AuthDispatcher({ type: "addUser", payload: user });

      console.log(AuthState.user);
    });
  }
  return (
    <Modal
      open={props.OpenModalForm}
      onClose={props.CloseModalForm}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
     
    >
      <Box sx={style}>
        <Paper >
      <IconButton
          onClick={props.CloseModalForm}
          sx={{ position: "absolute", right: "5%" }}
        >
          <CloseIcon />
        </IconButton>
        <Signin onSuccess={fetchuser} CloseModalForm={props.onClose}/>

        </Paper>
      </Box>
    </Modal>
  );
};
export default LoginModal;
