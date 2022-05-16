import { TailSpin } from "react-loader-spinner";
import React from "react";

export default function CustomLoader() {
  return (
    <TailSpin
      height="300"
      width="100"
      color="#221133"
      ariaLabel="loading"
      wrapperStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}
