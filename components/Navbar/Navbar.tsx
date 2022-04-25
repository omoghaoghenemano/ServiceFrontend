import React, { useState } from "react";
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
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
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
import VerifiedIcon from "@mui/icons-material/Verified";
export default function Navbar() {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="navbar__container">
      <div className="navbar__subitem">
        <StyledButton> About</StyledButton>

        <StyledButton sx={{ textDecoration: "underline" }}>
          {" "}
          <VerifiedIcon color="primary" /> Post on Wiki{" "}
        </StyledButton>
      </div>
      <StyledAppBar>
        <div className="navbar__container">
          <div>
            <IconButton>
              <MenuRoundedIcon />
            </IconButton>
        
          </div>
          <div>  <Typography color="black" >logo</Typography></div>
          <div style={{ width: "100%" }} className="navbar__childcontainer">
        
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
            <StyledSearchSubmitButton variant="contained">
              {" "}
              Search
            </StyledSearchSubmitButton>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <StyledButton variant="text" sx={{ textTransform: "none" }}>
                {" "}
                <PersonIcon />
                Account
                <KeyboardArrowDown />
              </StyledButton>
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
}
