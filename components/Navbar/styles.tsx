import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  AppBar,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

export const StyledTypography = styled(Typography)(
  sx({
    color: "#fffff",

    fontFamily: "GeoticaW01-FourOpen",
    fontSize: "28px",
  })
);
export const StyledQuote = styled(Typography)(
  sx({
    fontSize: "40px",
    color: "#221133",
    fontFamily: "cursive",
  })
);
export const StyledCaption = styled(Typography)(sx({}));
export const StyledAppBar = styled(AppBar)(
  sx({
    height: 70,
    position: "fixed",
    justifyContent: "center",

    display: "flex",
    background: "#152238",
    opacity: "100%",

    width: "100%",
  })
);
//BUTTON MAIN COLOR IS #F68B1E
export const StyledSearchSubmitButton = styled(Button)(
  sx({
    "color": "white",
    "textTransform": "none",
    "height": "40px",

    "background": "#F68B1E",
    "&:hover": {
      background: "#F68B1E",
    },
  })
);
export const StyledTextField = styled(TextField)(
  sx({
    minWidth: "40%",
  })
);
export const StyledButton = styled(Button)(
  sx({
    color: "#ffff",
    textTransform: "none",
  })
);
export const Styledpaper = styled(Paper)(
  sx({
    "height": 500,
    "width": 300,
    "position": "relative",

    "borderRadius": "10px",
    "&:hover": {
      elevation: "19%",
      height: 400,
      cursor: "pointer",
      boxShadow: 20,
    },
  })
);

export const Wrapper = styled("div")(
  sx({ width: "90%", marginLeft: "10%", marginTop: "4%" })
);
export const StyledProfile = styled("div")(
  sx({
    justifyContent: "spaced-evenly",
    alignItems: "self",

    display: "flex",
    left: "10%",
    position: "absolute",
    bottom: "40px",
  })
);
export const StyledTitle = styled("div")(
  sx({
    justifyContent: "spaced-evenly",
    alignItems: "center",

    display: "flex",
    left: "26%",
    position: "absolute",
    bottom: "40px",
  })
);

export const StyledDiv = styled("div")(
  sx({
    display: "flex",

    width: "100%",

    justifyContent: "end",
    justifyItems: "end",
    marginRight: "20%",
    alignItems: "center",
  })
);
export const StyledMainButton = styled(Button)(
  sx({
    "border": "1px #035772 ",
    "height": "40px",
    "borderStyle": "solid",
    "borderRadius": "20px",
    "fontFamily": "Avenir Light",
    "textTransform": "none",
    "background": "#F6F9F5",
    "color": "#152238",
    "fontSize": "13px",
    "&:hover": {
      background: "#035772",
      color: "white",
    },
  })
);
