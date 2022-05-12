import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  AppBar,
  TextField,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

export const StyledButton = styled(Button)(
  sx({
    width: "50%",
    color: "white",
    fontFamily: "serif",
    textTransform: "none",
    marginLeft: "10px",
    background: "#F68B1E",
    "&:hover": {
      background: "#FFA500",
    },
  })
);
export const StyledTypography = styled(Typography)(
  sx({
    color: "whitesmoke",
    fontFamily: "avenir",
    fontWeight: "bold",
    fontSize: "4rem",
  })
);
export const SubTypography = styled(Typography)(
  sx({
    color: "whitesmoke",
    fontFamily: "Avenir Light",
    fontSize: "20px",
    textAlign: "left",
    marginLeft: "10px",
  })
);
export const StyledTextField = styled(TextField)(
  sx({
    minWidth: "30%",
    border: "none",
    borderStyle: "none",

    background: "#C5C7C4",
    borderRadius: "20px",

    outline: 0,
    "& fieldset": {
      borderRadius: "20px",
    },
  })
);
export const StyledDiv = styled("div")(
  sx({
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    justifyItems: "center",
    width: "30%",
  })
);
export const StyledDivButton = styled(Button)(
  sx({
    border: "#1D67CD",
    borderRadius: "60px",

    borderShadow: "1px #000000",
    background: "white",
    color: "black",
    opacity: "40%",

    textDecorationColor: "whitesmoke",

    width: "30%",
    fontFamily: "serif",

    textTransform: "none",
    "&:hover": {
      background: "#689ADE",
    },
  })
);
