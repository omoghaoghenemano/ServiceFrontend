import { makeStyles ,withStyles} from '@mui/styles';
import { Paper,Button,Typography , Avatar, AppBar, TextField} from '@mui/material';
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from '@mui/system'

export const StyledTypography = styled(Typography)(
  sx({
    position:'relative',
   top:"40%",
    color:"white",
    fontFamily:"serif",
  })
)
export const StyledTextField = styled(TextField)(
    sx({
        background:"white",
        width:"30%",
      
        marginTop:"1%",
        borderRadius:"10px",
    })
)
export const StyledButton = styled(Button)(
    sx({
        color:"white",
        borderColor:"grey",
   
        marginTop:"1%",
        width:"10%",
        height:"40px",
        textTransform:"none",
        
        
    })
)
