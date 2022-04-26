import React from "react";
import { Paper, TextField, Typography, Button } from "@mui/material";
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
              <StyledTypography variant="caption">
                E-MAIL SUPPORT
              </StyledTypography>
              <StyledTypography variant="caption">CONTACT US</StyledTypography>

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
          
         
          <div style={{display:"flex",marginTop:"1%",justifyContent:"space-around"}}>
            <StyledTypography variant="caption">LET US HELP YOU</StyledTypography>

            <StyledTypography variant="caption">ABOUT US</StyledTypography>

            <StyledTypography variant="caption">MAKE MONEY WITH US</StyledTypography>

            <StyledTypography variant="caption">MORE INFO</StyledTypography>
          </div>
         
          <div style={{display:"flex",justifyContent:"space-around"}}>
            <StyledTypography variant="caption">Help center</StyledTypography>

            <StyledTypography variant="caption">Our Blog</StyledTypography>

            <StyledTypography variant="caption">Sell on this website</StyledTypography>

            <StyledTypography variant="caption">Privacy Policy</StyledTypography>
          </div>
         
          <div style={{display:"flex",justifyContent:"space-around"}}>
            <StyledTypography variant="caption">Your Account</StyledTypography>

            <StyledTypography variant="caption">Career</StyledTypography>

            <StyledTypography variant="caption">Advertise</StyledTypography>

            <StyledTypography variant="caption">Authentic Item Policy</StyledTypography>
          </div>
         
          <div style={{display:"flex",justifyContent:"space-around"}}>
            <StyledTypography variant="caption">Assistance</StyledTypography>

            <StyledTypography variant="caption">Forum</StyledTypography>

            <StyledTypography variant="caption">Host here</StyledTypography>

            <StyledTypography variant="caption">Cookie Policy</StyledTypography>
          </div>
         
          <div style={{display:"flex",justifyContent:"space-around"}}>
            <StyledTypography variant="caption">Manage your content & device</StyledTypography>

            <StyledTypography variant="caption">Terms & Conditions</StyledTypography>

            <StyledTypography variant="caption">Become an Affliate</StyledTypography>

            <StyledTypography variant="caption">Billing Policy</StyledTypography>
          </div>
         
          <div style={{display:"flex",justifyContent:"space-around", }}>
         
            <StyledTypography variant="caption">JOIN US ON SOCIAL</StyledTypography>


         
          </div>
         
        </Paper>
      </div>
    </div>
  );
}
