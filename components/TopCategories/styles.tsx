import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  AppBar,
  TextField,
  InputAdornment,
  Box,
  IconButton,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

export const StyledBox = styled(Box)(
  sx({
    background: "#152238",

    width: "80%",
  })
);
export const StyledTypography = styled(Typography)(
  sx({
    fontSize: "30px",
    color: "#ffff",
    fontFamily: "caudex",
  })
);
export const StyledDiv = styled("div")(
  sx({
    display: "grid",
    width: "80%",
    marginTop: "1%",
    gridTemplateColumns: "auto auto auto",
    gap: "10px",
  })
);
export const StyledHeaderTypo = styled(Typography)(
  sx({
    fontSize: "24px",
    fontFamily: "Helvetica Bold",
    textAlign: "center",
    color: "#ffff",
  })
);
export const StyledTypographySub = styled(Typography)(
  sx({
    fontFamily: "Helvetica Light",
    color: "#ffff",
    fontSize: "14px",
  })
);
export const StyledIconButton = styled(IconButton)(
  sx({
    "background": "black",

    "&:hover": {
      background: "black",
    },
  })
);
