import React, { useState, useEffect, useContext } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { RootState } from "../../state/reducers";

import {
  AppBar,
  Typography,
  Link,
  Box,
  ListItemText,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  ListItemIcon,
  List,
  ListItemButton,
  Menu,
  MenuItem,
} from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useRouter } from "next/router";
import {
  StyledAppBar,
  StyledButton,
  StyledSearchSubmitButton,
  StyledTextField,
} from "./styles";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { LoginModal } from "../LoginModal/Loginmodal";
import VerifiedIcon from "@mui/icons-material/Verified";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Clientapi from "../../pages/api/client";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import ForumIcon from "@mui/icons-material/Forum";

import Cookies from "js-cookie";
interface Contextype {
  AuthState: null | any;
  AuthDispatcher: null | any;
}
type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
};
const Navbar: React.FC<Props> = ({ article, removeArticle }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [categories, setCategories] = useState([]);
  const categoriesval = categories.slice(0, 14);
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const dispatch: Dispatch<any> = useDispatch();

  console.log("article", article);

  const route = useRouter();
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
    setMyaccount(false);
  };

  const Closeevent = () => setOpen(false);
  const [scroll, setScroll] = useState("33px");
  const [myaccount, setMyaccount] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mainservice, setMainservices] = useState([]);
  const [anchorElmenu, setAnchorElmenu] = React.useState<null | HTMLElement>(
    null
  );
  const displaylist = Boolean(anchorEl);
  const displaymenu = Boolean(anchorElmenu);
  const [uservaldata, setUserValdata] = useState<any>();
  const handleProfileClicks = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setMyaccount(!myaccount);
  };
  const handleCloseMenu = () => {
    setAnchorElmenu(null);
  };
  const [menu, setMenu] = useState(true);
  const handleMenuClicks = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElmenu(event.currentTarget);
    setMenu(!menu);
  };
  const handleScroll = () => {
    setScroll("0%");
  };
  const handleScrollclose = () => {
    setScroll("33px");
  };
  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset === 0 ? handleScrollclose() : handleScroll();
  });
  const state = useSelector((state: RootState) => state.appstate);
  console.log("confirmation of the state ", state);
  console.log("checking the category state", state.categories);

  const { depositMoney, storecategory, withdrawMoney, mainServices, bankrupt } =
    bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    if (categories.length === 0) {
      Clientapi.get("api/Categories").then((response) => {
        setCategories(response.data);
        AuthDispatcher({ type: "addCategories", payload: response.data });
        console.log(
          "checking data",
          AuthDispatcher({ type: "addCategories", payload: response.data })
        );
        storecategory(response.data);
        AuthDispatcher({ type: "displayCategories" });
      });

      console.log("the lenght wasnt fetched", AuthState.categorydata);
    }
    if (mainservice.length === 0) {
      Clientapi.get("/api/company/categories").then((response) => {
        mainServices(response.data);
      });
    }
    if (AuthState.isLoggedIn) {
      Clientapi.get("api/user").then((response) => {
        const user = response.data;
        AuthDispatcher({ type: "addUser", payload: user });
        console.log(AuthState.user);
        //checking dispatch for reducer
        depositMoney(user);
      });
    }
  }, [categories]);

  let catvalue = state.categories?.slice(0, 14);
  console.log("this are the categories", categories);

  const HandleLogout = () => {
    Clientapi.get("api/logout").then((response) => {
      const user = response.data;
      console.log("logging out");
      Cookies.remove("auth_token");
      AuthDispatcher({ type: "logout" });
      handleClose();
    });
  };

  const imagelist = [
    "ITservice.png",
    "cleaningservice.png",
    "Eventservice.png",
    "entertainmentservices.png",
    "childcareservices.jpeg",
    "automativeservices.jpeg",
    "building&tradeservices.png",
    "legalservices.png",
    "image&beautyservices.jpeg",
    "landscaping&gardeningservices.jpeg",
    "logisticsservices.png",
    "printingservices.png",
    "photography&videoservices.png",
    "weddingeventsservices.jpeg",
  ];
  const RenderMobile = () => {
    return (
      <div className="navbar__nav_mobile">
        <IconButton onClick={handleMenuClicks} onMouseLeave={handleCloseMenu}>
          <MenuRoundedIcon />
          <Menu
            id="basic-menu"
            anchorEl={anchorElmenu}
            open={displaymenu}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {" "}
            <Box>
              {catvalue?.map(
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
                  <MenuItem key={Math.random()}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignSelf: "self-end",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "serif",

                          fontSize: "0.9rem",
                        }}
                      >
                        <img
                          src={imagelist[i]}
                          style={{
                            height: "20px",
                            width: "20px",
                            position: "relative",
                            top: "4px",
                            left: -10,
                          }}
                        />
                        {item?.type}
                      </Typography>
                    </div>
                  </MenuItem>
                )
              )}
              <MenuItem onClick={handleCloseMenu}>
                <Typography
                  style={{
                    fontFamily: "serif",

                    fontSize: "0.9rem",
                  }}
                >
                  Other Services
                </Typography>
              </MenuItem>
            </Box>
          </Menu>
        </IconButton>

        <StyledTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          size="small"
        />
      </div>
    );
  };
  return (
    <div className="navbar__navbarwrapper">
      <div className="navbar__subitem">
        <StyledButton sx={{ textDecoration: "underline" }}>
          {" "}
          <VerifiedIcon color="primary" /> Post on Wiki{" "}
        </StyledButton>
        <StyledButton>
          <ForumIcon color="primary" /> Forum
        </StyledButton>
      </div>
      <StyledAppBar
        sx={{
          postion: "relative",
          top: scroll,
        }}
        onScroll={handleScroll}
      >
        {RenderMobile()}
        <div className="navbar__container">
          <div className="navbar__mainwrapper">
            <IconButton
              onClick={handleMenuClicks}
              onMouseLeave={handleCloseMenu}
            >
              <MenuRoundedIcon />
              <Menu
                id="basic-menu"
                anchorEl={anchorElmenu}
                open={displaymenu}
                onClose={handleCloseMenu}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {" "}
                <Box>
                  {catvalue?.map(
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
                      <MenuItem key={Math.random()}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignSelf: "self-end",
                          }}
                        >
                          <Typography
                            style={{
                              fontFamily: "serif",

                              fontSize: "0.9rem",
                            }}
                          >
                            <img
                              src={imagelist[i]}
                              style={{
                                height: "20px",
                                width: "20px",
                                position: "relative",
                                top: "4px",
                                left: -10,
                              }}
                            />
                            {item?.type}
                          </Typography>
                        </div>
                      </MenuItem>
                    )
                  )}
                  <MenuItem onClick={handleCloseMenu}>
                    <Typography
                      style={{
                        fontFamily: "serif",

                        fontSize: "0.9rem",
                      }}
                    >
                      Other Services
                    </Typography>
                  </MenuItem>
                </Box>
              </Menu>
            </IconButton>
          </div>
          <div>
            {" "}
            <Link
              onClick={() => {
                route.push("/");
              }}
            >
              <Typography color="black">Weware</Typography>
            </Link>
          </div>
          <div style={{ width: "100%" }} className="navbar__childcontainer">
            <StyledTextField
              placeholder="Find Service"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              size="small"
            />
            <StyledSearchSubmitButton variant="contained">
              {" "}
              Search
            </StyledSearchSubmitButton>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {AuthState.user ? (
                <StyledButton
                  variant="text"
                  sx={{ textTransform: "none" }}
                  onClick={handleProfileClicks}
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <HowToRegRoundedIcon />
                  Hi {AuthState.user.name}{" "}
                  {myaccount ? (
                    <>
                      {" "}
                      <KeyboardArrowDown
                        sx={{ transform: "rotate(0deg)" }}
                      />{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <KeyboardArrowDown
                        sx={{ transform: "rotate(180deg)" }}
                      />{" "}
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={displaylist}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={HandleLogout}>Logout</MenuItem>
                      </Menu>
                    </>
                  )}
                </StyledButton>
              ) : (
                <>
                  <StyledButton
                    variant="text"
                    sx={{ textTransform: "none" }}
                    onClick={handleOpen}
                  >
                    <PersonIcon /> Account <KeyboardArrowDown />
                  </StyledButton>
                  <LoginModal
                    OpenModalForm={open}
                    CloseModalForm={handleClose}
                  />{" "}
                </>
              )}

              <StyledButton variant="text" sx={{ textTransform: "none" }}>
                {" "}
                <HelpIcon />
                Help
                <KeyboardArrowDown />
              </StyledButton>
              <StyledButton variant="text" sx={{ textTransform: "none" }}>
                {" "}
                <FavoriteBorderIcon />
                Favorite
              </StyledButton>
            </div>
          </div>
          <div></div>
        </div>
      </StyledAppBar>
    </div>
  );
};
export default Navbar;
