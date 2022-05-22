import CookieConsent from "react-cookie-consent";

import React from "react";

export default function Cookie() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Got it"
      cookieName="myAwesomeCookieNamse2"
      style={{
        background: "#2B373B",
        width: "60%",
        display: "flex",
        justifyContent: "center",

        left: "20%",
      }}
      extraCookieOptions={["open"]}
      enableDeclineButton
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      declineButtonText={"rejects"}
      expires={150}
    >
      This website uses cookies to enhance the user experience.{" "}
      <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
    </CookieConsent>
  );
}
