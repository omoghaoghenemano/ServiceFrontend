import React, { useContext } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Card from "@mui/material/Card";
import {
  StyledCard,
  StyledTypography,
  HeaderTypography,
  StyledText,
  CustomCardDiv,
  CustomAvatarDiv,
  StyledAvatar,
  MainDiv,
} from "./styles";

type Props = {};

export default function Profile({}: Props) {
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  console.log("AuthState", AuthState);
  return (
    <div className="navbar__mycontainer">
      <div className="navbar__catwrapper">
        <div style={{ width: "80%", marginTop: "9%" }}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "left",

                width: "100%",
              }}
            >
              <HeaderTypography>Your Account</HeaderTypography>
            </div>
            <MainDiv>
              <StyledCard elevation={1}>
                {" "}
                <CustomCardDiv>
                  <StyledAvatar src="serviceicon.png" />
                  <CustomAvatarDiv>
                    <span>
                      <StyledTypography>Your Orders</StyledTypography>
                    </span>
                    <span>
                      <StyledText>View your service orders</StyledText>
                    </span>
                  </CustomAvatarDiv>
                </CustomCardDiv>
              </StyledCard>
              <StyledCard>
                {" "}
                <CustomCardDiv>
                  <StyledAvatar src="loginkey.png" />
                  <CustomAvatarDiv>
                    <span>
                      <StyledTypography>Login & Security</StyledTypography>
                    </span>
                    <span>
                      <StyledText>
                        Edit,image, Login,name, and mobile number
                      </StyledText>
                    </span>
                  </CustomAvatarDiv>
                </CustomCardDiv>
              </StyledCard>
              <StyledCard>
                {" "}
                <CustomCardDiv>
                  <StyledAvatar src="telephone.png" />
                  <CustomAvatarDiv>
                    <span>
                      <StyledTypography>Contact Us</StyledTypography>
                    </span>
                    <span>
                      <StyledText>
                        Contact our Customer Service via Phone or Chat
                      </StyledText>
                    </span>
                  </CustomAvatarDiv>
                </CustomCardDiv>
              </StyledCard>
            </MainDiv>
          </div>
        </div>{" "}
      </div>{" "}
      <div style={{ marginTop: "37%" }}></div>
    </div>
  );
}
