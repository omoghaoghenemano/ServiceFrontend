import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton, Paper } from "@mui/material";

import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Button from "@mui/material/Button";
import Clientapi from "../../pages/api/client";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { RootState } from "../../state/reducers";
import Card from "@mui/material/Card";

import {
  StyledTypography,
  StyledLink,
  CustomDrawer,
  StyledHeader,
  StyledAbout,
  StyledPriceValue,
  StyledPrice,
  StyledButton,
  StyledCard,
} from "../Categories/styles";

type Props = {
  lessvalue?: [] | any;
  showall?: any;
};
export const SideBar: React.FC<Props> = ({ lessvalue, showall }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const state = useSelector((state: RootState) => state.appstate);
  return (
    <>
      <CustomDrawer variant="permanent" anchor="left">
        <Divider />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10%",
          }}
        >
          {lessvalue?.map(
            (
              item: {
                type:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
              },
              i: string | number | any
            ) => (
              <StyledLink key={Math.random()}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignSelf: "self-end",
                  }}
                >
                  <StyledTypography
                    style={{
                      fontFamily: "serif",

                      fontSize: "0.9rem",
                    }}
                  >
                    {item?.type}
                  </StyledTypography>
                </div>
              </StyledLink>
            )
          )}
          <StyledLink>
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <StyledTypography sx={{ textDecoration: "underline" }}>
                {" "}
                Show all ({showall})
              </StyledTypography>
            </div>
          </StyledLink>
        </div>
        <Divider />
        <StyledTypography> Location</StyledTypography>
        <StyledLink>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <StyledTypography> Nigeria </StyledTypography>
          </div>
        </StyledLink>
        <Divider />
        <StyledTypography> Types of Services</StyledTypography>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <div>
            {state.services?.map((item: any, i: any) => {
              return (
                <StyledLink key={Math.random()}>
                  <StyledTypography>{item.title}</StyledTypography>
                </StyledLink>
              );
            })}
          </div>
        </div>

        <Divider />
      </CustomDrawer>
    </>
  );
};
