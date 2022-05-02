import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Box,
  Avatar,
  AppBar,
  TextField,
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
