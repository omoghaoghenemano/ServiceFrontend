import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  Link,
  AppBar,
  TextField,
  Drawer,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

export const StyledLink = styled(Link)(
  sx({
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
    "&:hover": {
      color: "blue",
    },
  })
);
export const CustomDrawer = styled(Drawer)(
  sx({
    width: "19rem",

    flexShrink: 0,

    "& .MuiDrawer-paper": {
      width: "85%",
      boxSizing: "border-box",
      height: "100%",

      position: "static",
      marginLeft: "2.5%",

      overflowY: "scroll",
      borderRadius: "12px",
    },
  })
);
export const StyledTypography = styled(Typography)(
  sx({
    width: "50%",

    fontFamily: "serif",
    fontSize: "0.9rem",

    marginLeft: "10px",
  })
);
