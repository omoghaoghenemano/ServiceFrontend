import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  AppBar,
  Card,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

export const StyledCard = styled(Card)(
  sx({
    "height": 100,
    "width": "100%",
    "minWidth": "250px",
    "borderRadius": "10px",
    "background":
      "linear-gradient(164.22deg, #23395D 11.02%, rgba(8, 99, 247, 0.31) 112.14%);",
    "cursor": "pointer",
    "&:hover": {
      boxShadow: " 0px 2px 8px -1px #565454;",
    },
  })
);
export const StyledTypography = styled(Typography)(
  sx({
    textAlign: "center",

    fontWeight: "bold",
    color: "white",
  })
);

export const HeaderTypography = styled(Typography)(
  sx({
    fontSize: "1.8rem",
  })
);
export const StyledAvatar = styled(Avatar)(
  sx({
    height: "60px",
    width: "60px",
  })
);

export const StyledText = styled(Typography)(
  sx({
    fontFamily: "Avenir Light",

    color: "white",
    fontSize: "15px",
    width: "90%",
  })
);
export const CustomCardDiv = styled("div")(
  sx({
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
    height: "100%",
    marginLeft: "10px",
  })
);

export const CustomAvatarDiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    marginLeft: "4px",
  })
);
export const MainDiv = styled("div")(
  sx({
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",

    gap: "20px",
    width: "100%",
  })
);
