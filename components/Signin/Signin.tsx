
import React from 'react'
import {Button, Typography, TextField} from '@mui/material'
import {StyledButton,StyleCheckoutButton, StyledTypography,StyledButtonGoogle,StyledTextField} from './styles'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
type Props = {}

function Signin({}: Props) {
  return (
    <div className='flexitems__flexsignin' >
        <StyledButton>Facebook</StyledButton>
        <StyledButtonGoogle>Google</StyledButtonGoogle>
        <StyledTextField type='text' size='small' label="username"/>
        <StyledTextField type='password' size='small' label="password"/>
        <StyleCheckoutButton variant="contained" endIcon={<ArrowForwardIosIcon />} > Login</StyleCheckoutButton>
        <StyledTypography >Don't have an Account?<Button variant='text' sx={{textTransform:"none"}}>Signin</Button></StyledTypography>
       <br></br><br></br>

    </div>
  )
}

export default Signin