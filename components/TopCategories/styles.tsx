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
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

export const StyledBox = styled(Box)(
  sx({
    background: "#949593",
    opacity: "78%",
    width: "80%",
  })
);
export const StyledTypography = styled(Typography)(
  sx({
    fontSize: "40px",
    fontFamily: "caudex",
  })
);
