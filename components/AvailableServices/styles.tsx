import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Box,
  Avatar,
  AppBar,
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
    marginTop: "30px",
  })
);

export const StyledLink = styled(Link)(
  sx({
    "&:hover": {
      color: "blue",
    },
  })
);

export const StyledCard = styled(Card)(
  sx({
    "cursor": "pointer",
    "borderRadius": "10px",

    "&:hover": {
      boxShadow: " 0px 2px 12px -1px #565454;",
    },
  })
);
export const StyledBox = styled(Box)(
  sx({
    background: "#152238",

    width: "100%",
    marginTop: "3%",
  })
);
export const StyledCustomTypography = styled(Typography)(
  sx({
    fontSize: "30px",
    fontFamily: "caudex",
    color: "#ffff",
  })
);
