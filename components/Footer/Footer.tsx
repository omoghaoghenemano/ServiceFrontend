import React from "react";
import Link from "next/link";
import { Paper, TextField, Typography, Button } from "@mui/material";
import { StyledTextField, StyledTypography, StyledButton } from "./styles";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="footer">
      <div className="footer__stripbackground">
        <p>facebook</p>
        <p>instagram</p>
        <p>pinterest</p>
        <p>twitter</p>
      </div>
      <div className="footer__footeritem">
        <h6>hi</h6>
      </div>
    </div>
  );
}
