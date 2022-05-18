import React, { useContext, useState } from "react";
import {
  Button,
  Divider,
  IconButton,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import {
  StyledButton,
  StyleCheckoutButton,
  StyledTypography,
  StyledButtonGoogle,
  StyledTextField,
  StyleLoadingButton,
  CustomDivider,
  StyledBox,
} from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Clientapi from "../../../pages/api/client";
import StateContext from "../../../context/StateContext";
import DispatchContext from "../../../context/DispatchContext";
import Cookies from "js-cookie";
import ReCaptchaV2 from "react-google-recaptcha";

import LoadingButton from "@mui/lab/LoadingButton";

type Props = {
  saveUser: (article: IArticle | any) => void;
  CloseModalForm: () => void;
  onSuccess: () => void;
};
const Signin: React.FC<Props> = ({ saveUser, CloseModalForm, onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const [recapcha, setRecapcha] = useState(false);
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  const [loginsucess, setLoginsucess] = useState(true);
  const [article, setArticle] = React.useState<IArticle | {}>();

  const onSubmit = async (data: any) => {
    console.log(data.email);
    console.log(data.password);
    if (!recapcha) {
      console.log("please use recaptcha");
      setLoginsucess(true);
    } else {
      await handleClick();
      await Clientapi.post("api/login", data)
        .then((response) => {
          console.log("it worked hahha", response);
          const user = response.data;
          console.log("your auth token is", response.data.auth_token);

          Cookies.set("auth_token", response.data.auth_token);
          AuthDispatcher({ type: "login" });
          AuthDispatcher({ type: "addUser", payload: response.data });

          setArticle({
            ...article,
            user,
          });
          console.log("article payload data", article);
          saveUser(article);

          console.log("the user state is", AuthState.user);
          onSuccess();
          setLoginsucess(true);

          setLoading(false);
        })
        .catch((err: AxiosError) => {
          setLoginsucess(false);
          console.log("invalid data entered");
          setLoading(false);
        });
    }
  };
  console.log("finding the recaptcha ", process.env.NEXT_PUBLIC_SITE_KEY);
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="flexitems__flexsignin">
        <Typography
          style={{
            fontSize: "1.4rem",
            color: "#152238",
            fontWeight: "bold",
            marginTop: "30px",
          }}
        >
          Log In
        </Typography>

        <CustomDivider />
        {!loginsucess && (
          <StyledBox sx={{ background: "red" }}>
            <Typography
              color="white"
              align="center"
              sx={{ fontSize: "0.9rem", fontFamily: "serif" }}
            >
              Email or password is incorrect
            </Typography>
          </StyledBox>
        )}

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
        <br></br>

        <ReCaptchaV2
          sitekey="6LeotcQfAAAAAHVLOUkTTNL0tk0ic512fOIaVEPG"
          onChange={() => {
            setRecapcha(true);
          }}
        />
        {loading ? (
          <StyleLoadingButton
            loading={loading}
            loadingPosition="end"
            endIcon={<ArrowForwardIosIcon />}
            variant="contained"
          >
            Login
          </StyleLoadingButton>
        ) : (
          <StyleCheckoutButton
            type="submit"
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
          >
            {" "}
            Login
          </StyleCheckoutButton>
        )}
        <StyledTypography>
          {"        Don't have an Account?"}
          <Button variant="text" sx={{ textTransform: "none" }}>
            SignUp
          </Button>
        </StyledTypography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <StyledButton>
            {" "}
            <img
              src="fb.png"
              alt="facebookimage"
              height={20}
              style={{
                color: "white",
                background: "white",
                marginRight: "2px",

                position: "relative",
              }}
            ></img>
            Facebook
          </StyledButton>
          <StyledButtonGoogle>
            {" "}
            <img
              src="google.png"
              alt="googleimage"
              height={20}
              style={{
                color: "white",
                background: "white",
                marginRight: "2px",

                position: "relative",
              }}
            ></img>
            Google
          </StyledButtonGoogle>
        </div>
        <br></br>
        <br></br>
      </div>
    </Box>
  );
};
export default Signin;
