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
    cursor: "pointer",
    borderRadius: "10px",
    width: "200px",
    display: "flex",
    background: "#464545",
    justifyContent: "space-between",
    justifyItems: "center",
    "&:hover": {
      boxShadow: " 0px 2px 12px -1px #565454;",
    },
  })
);
export const StyledTypographyHeader = styled(Typography)(
  sx({
    fontSize: "1rem",
    fontWeight: "bold",
    fontFamily: "serif",
    color: "white",
  })
);
export const StyledButton = styled(Button)(
  sx({
    background: "#F68B1E",
    color: "white",
    textTransform: "none",
    width: "200px",
    maxwidth: "10px",
    "&:hover": {
      background: "#F68B1E",
    },
  })
);
