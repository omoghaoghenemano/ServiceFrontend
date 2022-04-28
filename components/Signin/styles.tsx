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
     
        marginTop:"40px",
        color:"white",
        borderRadius:"13px",
        textTransform:"none",
        borderShadow:" 5px 4px grey",
        boxShadow:" 5px 4px #888888"
        ,
       background: "blue"
        ,
        '&:hover':{
          background: "blue"
        }
      })
)
export const StyledButtonGoogle = styled(Button)(
  
    sx({
        width:"80%",
       
        marginTop:"40px",
        color:"black",
        borderRadius:"13px",
        textTransform:"none",
        background: "whitesmoke",
        borderShadow:" 5px 4px grey"
        ,
        boxShadow:" 5px 4px #888888"
        ,
        '&:hover':{
          background: "white"
        }
      })
)
export const StyledTextField = styled(TextField)(
    sx({
        width:"80%",
      
        marginTop:"30px",
        color:"white",
      
        textTransform:"none",
    
        
    })
)
export const StyleCheckoutButton = styled(Button)(
    sx({
        width:"80%",
       color:"white",
        marginTop:"30px",
        borderRadius:"13px",
        textTransform:"none",
        background: "#FFA500",
        borderShadow:" 5px 4px grey"
        ,
        boxShadow:" 5px 4px #888888"
        ,
        '&:hover':{
          background: "#FFA500"
        }
      })
)
export const StyledTypography = styled(Typography)(
    sx({
        marginTop:"30px"
    })
)