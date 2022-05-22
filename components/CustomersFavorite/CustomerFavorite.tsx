import React, { useEffect, useContext } from "react";
import Layout from "../../pages/layout";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { RootState } from "../../state/reducers";
import Clientapi from "../../pages/api/client";
export default function CustomerFavorite() {
  const state = useSelector((state: RootState) => state.appstate);
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const dispatch: Dispatch<any> = useDispatch();
  const { getuserfavorite } = bindActionCreators(actionCreators, dispatch);
  const UserFavorite = () => {
    Clientapi.get("api/user/favorite").then((res) => {
      const favorite = res.data;
    });
  };
  useEffect(() => {
    if (state.user) {
      UserFavorite();
      console.log("user favoritte");
    } else {
      console.log("you're not logged in");
    }
  }, [state.user]);

  return <Layout>CustomerFavorite</Layout>;
}
