import React, { useContext } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";

type Props = {};

export default function Profile({}: Props) {
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  console.log("AuthState", AuthState);
  return <div>Userprofile loading{AuthState.user?.name}</div>;
}
