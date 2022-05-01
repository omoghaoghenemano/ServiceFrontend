import React, { useContext,useState } from "react";
import { Button, Divider,IconButton, Typography, Box, TextField } from "@mui/material";
import { AxiosError, AxiosResponse } from "axios"
import { useForm } from "react-hook-form";
import {
  StyledButton,
  StyleCheckoutButton,
  StyledTypography,
  StyledButtonGoogle,
  StyledTextField,
  StyleLoadingButton,
  CustomDivider,
  StyledBox
} from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Clientapi from "../../pages/api/client";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Cookies from "js-cookie";

import LoadingButton from '@mui/lab/LoadingButton';

type Props = {
  CloseModalForm:()=>void;
  onSuccess:()=>void;

};


function Signin(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { AuthState } = useContext(StateContext);
  const { AuthDispatcher } = useContext(DispatchContext);
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  const [loginsucess, setLoginsucess] = useState(true) 

  const onSubmit = async (data: any)  => {
    console.log(data.email);
    console.log(data.password);
    await handleClick()
   await Clientapi.post("api/login", data).then((response) => {
      console.log("it worked hahha", response);
      const user = response.data;
      console.log("your auth token is", response.data.auth_token);

      Cookies.set("auth_token", response.data.auth_token);
      AuthDispatcher({ type: "login" });
      AuthDispatcher({ type: "addUser", payload: response.data });
      console.log("the user state is", AuthState.user);
      props.onSuccess;
      setLoginsucess(true);
    
      setLoading(false);
    })
    .catch((err: AxiosError) => {
     
      setLoginsucess(false);
      console.log("invalid data entered")
      setLoading(false);
    })
  };
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="flexitems__flexsignin">
       
        <StyledButton>Facebook</StyledButton>
        <StyledButtonGoogle>Google</StyledButtonGoogle>
        <CustomDivider/>
        {!loginsucess && (<StyledBox sx={{background:"red"}}><Typography color="white" align="center" sx={{fontSize:"0.9rem"}}>Email or password is incorrect</Typography></StyledBox>)}
        <StyledTextField
          type="text"
          size="small"
          label="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />

        <StyledTextField
          type="password"
          size="small"
          {...register("password", { required: true, maxLength: 100 })}
          label="password"
        />
        {loading?(       <StyleLoadingButton
          
         
          loading={loading}
          loadingPosition="end"
          endIcon={<ArrowForwardIosIcon />}
          variant="contained"
        >
          Login
        </StyleLoadingButton>):(<StyleCheckoutButton
          type="submit"
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
          
         
        >
          {" "}
          Login
        </StyleCheckoutButton>)}
        <StyledTypography>
          Don't have an Account?
          <Button variant="text" sx={{ textTransform: "none" }}>
            SignUp
          </Button>
        </StyledTypography>

        <br></br>
        <br></br>
      </div>
    </Box>
  );
}

export default Signin;
