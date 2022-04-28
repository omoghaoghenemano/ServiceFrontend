
import React from 'react'
import {Button, IconButton,Typography, Box,TextField} from '@mui/material'
import { useForm } from 'react-hook-form';
import {StyledButton,StyleCheckoutButton, StyledTypography,StyledButtonGoogle,StyledTextField} from './styles'
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Clientapi from '../../pages/api/client';
import Cookies from 'js-cookie'
type Props = {
  onCloseForm : any
}


function Signin(props: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data.email)
    console.log(data.password)
    Clientapi.post('api/login',data)
    .then(response=>{
      console.log("it worked hahha",response)
      console.log("your auth token is", response.data.auth_token)
      Cookies.set('auth_token',response.data.auth_token)

    })
  };
  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)}>
    <div className='flexitems__flexsignin' >
        <IconButton onClick={
         props.onCloseForm
        } sx={{position:'absolute', right:"5%"}}><CloseIcon/></IconButton>
        <StyledButton>Facebook</StyledButton>
        <StyledButtonGoogle>Google</StyledButtonGoogle>
        <StyledTextField  type='text' size='small' label="email"  {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
        <StyledTextField  type='password' size='small'  {...register("password", {required: true, maxLength: 100})} label="password" />
        <StyleCheckoutButton type='submit' variant="contained" endIcon={<ArrowForwardIosIcon />} > Login</StyleCheckoutButton>
        <StyledTypography >Don't have an Account?<Button variant='text' sx={{textTransform:"none"}}>Signin</Button></StyledTypography>
        
       <br></br><br></br>

    </div>
    </Box>
  )
}

export default Signin