import React from "react";
import { Paper, TextField, Typography ,Button} from "@mui/material";
import {StyledTextField,StyledTypography,StyledButton} from './styles'
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

             <StyledTypography variant="caption">E-MAIL SUPPORT</StyledTypography>
             <StyledTypography variant="caption">CONTACT US</StyledTypography>
            

             <StyledTextField size="small"/>
             
             <StyledButton variant="outlined"      size="small">Male</StyledButton>
             <StyledButton variant="outlined"  size="small">Female</StyledButton>
             </div>
            <div>
                
            </div>
         </div>
             <StyledTypography variant="caption">E-MAIL SUPPORT</StyledTypography>
             <div>
             <StyledTypography variant="caption">CONTACT US</StyledTypography>
                 
             </div>
             <div>
             <StyledTypography variant="caption">CONTACT US</StyledTypography>
                 
             </div>
             <div>
             <StyledTypography variant="caption">CONTACT US</StyledTypography>
                 
             </div>
             <div>
             <StyledTypography variant="caption">CONTACT US</StyledTypography>
                 
             </div>
             <div>
             <StyledTypography variant="caption">CONTACT US</StyledTypography>
                 
             </div>
      
        </Paper>
      </div>
    </div>
  );
}
