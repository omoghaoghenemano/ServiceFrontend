import React from "react";
import { useState, useEffect, useContext } from "react";
import Clientapi from "../../pages/api/client";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import { Box, Fade, Modal, IconButton, Paper, Typography } from "@mui/material";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addArticle } from "../../store/actions/actionCreators";
import { Dispatch } from "redux";

import Signin from "../Authentication/Signin/Signin";
import Signup from "../Authentication/Signup/Signup";
import CloseIcon from "@mui/icons-material/Close";
// make login reusable
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 370,

  borderRadius: "25px",
  outline: 0,
};

type Props = {
  OpenModalForm: any;
  CloseModalForm: any;
  isSignup?: boolean;
};

export const LoginModal: React.FC<Props> = ({
  CloseModalForm,
  OpenModalForm,
  isSignup,
}) => {
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const [open, setOpen] = useState(false);
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveuser = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  const fetchuser = () => {
    Clientapi.get("api/user").then((response) => {
      const user = response.data;
      AuthDispatcher({ type: "login" });
      AuthDispatcher({ type: "addUser", payload: user });

      console.log(AuthState.user);
    });
  };
  return (
    <Modal
      open={OpenModalForm}
      onClose={CloseModalForm}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Paper style={{ borderRadius: "25px" }}>
          <IconButton
            onClick={CloseModalForm}
            sx={{ position: "absolute", right: "5%" }}
          >
            <CloseIcon />
          </IconButton>
          {isSignup ? (
            <Signup />
          ) : (
            <Signin
              saveUser={saveuser}
              onSuccess={fetchuser}
              CloseModalForm={CloseModalForm}
            />
          )}
        </Paper>
      </Box>
    </Modal>
  );
};
