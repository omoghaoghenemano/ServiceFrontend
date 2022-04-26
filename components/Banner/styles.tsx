import { makeStyles ,withStyles} from '@mui/styles';
import { Paper,Button,Typography , Avatar, AppBar, TextField} from '@mui/material';
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from '@mui/system'


export const StyledButton = styled(Button)(
  
    sx({
        width:"450px",
        color:"white",
        textTransform:"none",
        marginLeft:"10px", background: "#FFA500"
        ,
        '&:hover':{
          background: "#FFA500"
        }
      })
)
