import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Box,
  Avatar,
  AppBar,
  IconButton,
  TextField,
  Card,
  Link,
  Divider,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

export const StyledTypography = styled(Typography)(
  sx({
    fontSize: "12px",
    fontFamily: "san-serif",
    marginLeft: "15%",
    color: "rgb(3, 87, 114)",
  })
);

export const StyledLink = styled(Link)(
  sx({
    "&:hover": {},
  })
);
export const StyledIconButton = styled(IconButton)(
  sx({
    "&:active": {
      color: "red",
    },
    "&:focus": {
      color: "red",
    },
  })
);

export const StyledCard = styled(Card)(
  sx({
    cursor: "pointer",

    display: "flex",

    justifyContent: "flex-start",

    border: "#949593 5px",
    opacity: "78%",
    borderRadius: " 3px",
    height: "100%",

    width: {
      xs: "200px",

      sm: "230px",

      lg: "250px",
      xl: "300px",
    },

    borderStyle: "solid",
    marginLeft: {
      sm: "2%",
      lg: "3%",
      xl: "7%",
    },

    background: "#F6F9F5",

    justifyItems: "flex-end",
    alignItems: "flex-end",

    "&:hover": {
      boxShadow: " 0px 2px 12px -1px #565454;",
    },
  })
);
export const TextTypography = styled(Typography)(
  sx({
    fontFamily: "sans-serif",

    fontStretch: "normal",
    fontStyle: "normal",

    fontSize: "12px",
    marginLeft: "4px",
    color: "rgb(98, 100, 98)",
  })
);
export const StyledTypographyHeader = styled(Typography)(
  sx({
    fontSize: " 14px",

    fontFamily: "Avenir Light",
  })
);
export const StyledButton = styled(Button)(
  sx({
    background: "#F68B1E",
    color: "white",
    textTransform: "none",
    width: "255px",
    maxwidth: "10px",
    "&:hover": {
      background: "#F68B1E",
    },
  })
);
export const StyledPriceValue = styled(Typography)(
  sx({
    color: "#FF4040",
    fontFamily: "Avenir Light",
    fontSize: "25px",
    textShadow: "rgba(0, 0, 0, 0.298039) 0px 5px 0px",
  })
);
export const StyledPrice = styled(Typography)(
  sx({
    fontSize: "11px",
    fontWeight: "bold",

    textAlign: "center",
    color: "#F6F9F5",

    fontFamily: "Avenir Light",
  })
);
export const StyledBox = styled(Box)(
  sx({
    background: "#949593",
    opacity: "78%",
    width: "100%",
    marginTop: "3%",
  })
);
export const StyledCustomTypography = styled(Typography)(
  sx({
    fontSize: "30px",
    fontFamily: "caudex",
  })
);
