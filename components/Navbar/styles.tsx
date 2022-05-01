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

export const StyledTypography = styled(Typography)(
  sx({
    color: "grey",
    fontFamily: "san-serif",
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
    background: "whitesmoke",
    height: 50,
    position: "fixed",
    top: "5%",
    width: "100%",
  })
);
//BUTTON MAIN COLOR IS #F68B1E
export const StyledSearchSubmitButton = styled(Button)(
  sx({
    color: "white",
    textTransform: "none",
    marginLeft: "10px",
    background: "#F68B1E",
    "&:hover": {
      background: "#FFA500",
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
    color: "black",
    textTransform: "none",
    "&:hover": {
      background: "none",
    },
  })
);
export const Styledpaper = styled(Paper)(
  sx({
    height: 300,
    width: 300,
    position: "relative",

    borderRadius: "10px",
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

const useStyles = makeStyles({
  root: {},
  companyname_typography: {
    color: "grey",
    textAlign: "center",
    fontFamily: "san-serif",
    fontStyle: "italic",
  },
  paper: {
    height: 400,
    width: 300,

    borderRadius: "10px",
    "&:hover": {
      elevation: "19%",
      height: 400,
      cursor: "pointer",
      boxShadow: 20,
    },
  },
  wrapper: {
    width: "90%",
    marginLeft: "10%",
    marginTop: "4%",
  },
  quote: {
    color: "#221133",
  },
  profile: {
    marginTop: "30%",
    justifyContent: "spaced-evenly",
    alignItems: "self",

    display: "flex",
  },
});
export default useStyles;
