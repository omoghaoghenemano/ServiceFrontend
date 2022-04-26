import React from "react";
import Link from "next/link";
import { Paper, TextField, Typography, Button} from "@mui/material";
import { StyledTextField, StyledTypography, StyledButton } from "./styles";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="footer">
      <div style={{ width: "100%" }}>
        <Paper
          elevation={0} 
          sx={{ background: " #464545;", lineHeight: "60px" }}
        >
          <div className="footer__container">
            <div className="footer__child">
              <Link href="">
              <StyledTypography variant="caption">
                E-MAIL SUPPORT
              </StyledTypography>
              </Link>
              <Link href="">

              <StyledTypography variant="caption">CONTACT US</StyledTypography>
              </Link>

              <StyledTextField size="small" />

              <StyledButton variant="outlined" size="small">
                Male
              </StyledButton>
              <StyledButton variant="outlined" size="small">
                Female
              </StyledButton>
            </div>
            
            <div></div>
          
          </div>
          
         
          <div style={{display:"grid", marginLeft:"10%", gridTemplateColumns:"auto auto auto auto"}}>
          <Link href="">
            <StyledTypography variant="caption">LET US HELP YOU</StyledTypography>
</Link>
<Link href="">
            <StyledTypography  sx={{marginLeft:"-10px"}} variant="caption">ABOUT US</StyledTypography>
            </Link>
            <Link href="">
            <StyledTypography variant="caption">MAKE MONEY WITH US</StyledTypography></Link>
            <Link href="">
            <StyledTypography variant="caption">MORE INFO</StyledTypography></Link>
          </div>
         
          <div style={{display:"grid",gap:"40px", marginLeft:"10%", gridTemplateColumns:"auto auto auto auto"}}>
          <Link href="">
            <StyledTypography variant="caption">Help center</StyledTypography>
            </Link><Link href="">
            <StyledTypography sx={{marginLeft:"10px"}} variant="caption">Our Blog</StyledTypography>
            </Link><Link href="">
            <StyledTypography   sx={{position:"relative", right:10}} variant="caption">Sell on this website</StyledTypography>
            </Link><Link href="">
            <StyledTypography variant="caption">Privacy Policy</StyledTypography></Link>
          </div>
            <div style={{display:"grid",gap:"20px", marginLeft:"10%", gridTemplateColumns:"auto auto auto auto"}}><Link href="">
            <StyledTypography variant="caption">Your Account</StyledTypography>
            </Link><Link href="">
            <StyledTypography variant="caption">Career</StyledTypography>
            </Link><Link href="">
            <StyledTypography variant="caption">Advertise</StyledTypography>
            </Link><Link href="">
            <StyledTypography sx={{position:"relative", right:-57}} variant="caption">Authentic Item Policy</StyledTypography></Link>
          </div>
         
          <div style={{display:"grid", gap:"20px",marginLeft:"10%", gridTemplateColumns:"auto auto auto auto"}}><Link href="">
            <StyledTypography variant="caption">Assistance</StyledTypography></Link>
            <Link href="">
            <StyledTypography sx={{position:"relative", right:4}} variant="caption">Forum</StyledTypography></Link>
            <Link href="">
            <StyledTypography  sx={{marginLeft:"-20px"}} variant="caption">Host here</StyledTypography></Link>
            <Link href="">
            <StyledTypography sx={{position:"relative", right:-35}} variant="caption">Cookie Policy</StyledTypography></Link>
          </div>
         
          <div style={{display:"grid", marginLeft:"10%", gridTemplateColumns:"auto auto auto auto"}}>
          <Link href="">
            <StyledTypography variant="caption">Manage your content & device</StyledTypography></Link>
            <Link href="">
            <StyledTypography sx={{position:"relative", left:-42}} variant="caption">Terms & Conditions</StyledTypography></Link>
            <Link href="">
            <StyledTypography sx={{position:"relative", left:-62}} variant="caption">Become an Affliate</StyledTypography></Link>
            <Link href="">
            <StyledTypography sx={{position:"relative", left:-12}}  variant="caption">Billing Policy</StyledTypography></Link>
          </div>
         
          <div style={{display:"grid",gap:"20px", marginLeft:"10%", gridTemplateColumns:"auto auto auto auto"}}>
         
            <StyledTypography variant="caption">JOIN US ON SOCIAL</StyledTypography>
            <br></br>


         
          </div>
          <div  style={{display:"flex",marginLeft:"10%" }}>
        
          <StyledTypography   variant="caption">social media icon</StyledTypography>
          
          <StyledTypography   variant="caption">social media icon</StyledTypography>
          <StyledTypography   variant="caption">social media icon</StyledTypography>

          </div>
         
        </Paper>
      </div>
    </div>
  );
}
