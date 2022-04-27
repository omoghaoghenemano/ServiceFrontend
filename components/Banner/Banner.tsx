import { Button, Typography } from '@mui/material'
import React from 'react'
import {StyledButton} from './styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type Props = {}

export default function Banner({}: Props) {
  return (
    <div  style={{background:"black"}}><img style={{opacity:0.3,objectFit:"cover",overflow: "hidden",position:"relative" , background:"blue",width:"100%",height:"400px"}} src='banner.jpg'></img>
    <div style={{position:"absolute", top:"20%",right:"35%"}} >
      <Typography sx={{color:"white"}} variant='h4'>WELCOME TO THE FUTURE</Typography>
      <Typography align="center" sx={{color:"white"}} variant='h6'>The best reliable service </Typography>
      <Typography align="center" sx={{color:"white"}} variant='h6'>Explore latest advertisement both nearby and faraway </Typography>
      <div style={{display:"flex", justifyContent:"center",  marginTop:"10%"}}>
        <StyledButton  endIcon={<ArrowForwardIosIcon />} >Checkout latest advertisement</StyledButton>
    


      </div>
    </div>
    </div>
  )
}