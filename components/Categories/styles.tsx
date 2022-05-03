import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  Link,
  AppBar,
  TextField,
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
export const StyledTypography = styled(Typography)(
  sx({
    width: "50%",

    fontFamily: "serif",
    fontSize: "0.9rem",

    marginLeft: "10px",
  })
);
