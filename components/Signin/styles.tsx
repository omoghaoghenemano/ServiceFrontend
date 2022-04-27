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
        width:"80%",
        height:"40px",
        marginTop:"40px",
        color:"white",
        borderRadius:"13px",
        textTransform:"none",
        borderShadow:" 5px 10px grey",
        boxShadow:" 5px 10px #888888"
        ,
        marginLeft:"10px", background: "blue"
        ,
        '&:hover':{
          background: "blue"
        }
      })
)
export const StyledButtonGoogle = styled(Button)(
  
    sx({
        width:"80%",
        height:"40px",
        marginTop:"40px",
        color:"black",
        borderRadius:"13px",
        textTransform:"none",
        marginLeft:"10px", background: "whitesmoke",
        borderShadow:" 5px 10px grey"
        ,
        boxShadow:" 5px 10px #888888"
        ,
        '&:hover':{
          background: "white"
        }
      })
)
export const StyledTextField = styled(TextField)(
    sx({
        width:"80%",
      
        marginTop:"40px",
        color:"white",
        borderRadius:"13px",
        textTransform:"none",
    })
)