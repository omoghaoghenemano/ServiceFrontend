import "../styles/app.scss";
import type { AppProps } from "next/app";
import { useImmerReducer } from "use-immer";
import StateContext from "../context/StateContext";
import DispatchContext from "../context/DispatchContext";
import { AuthReducer, initialAuthState } from "../store/auth.store";
import { GlobalReducer, initialGlobalState } from "../store/global.store";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "../store/reducer.store";
import store from "./state";
function MyApp({ Component, pageProps }: AppProps) {
  const [GlobalState, GlobalDispatcher] = useImmerReducer<any>(
    GlobalReducer,
    initialGlobalState
  );

  const [AuthState, AuthDispatcher] = useImmerReducer<any>(
    AuthReducer,
    initialAuthState
  );
  const StateProviders: any = { GlobalState, AuthState };

  const DispatchProviders: any = { GlobalDispatcher, AuthDispatcher };
  console.log("store is ", store);

  return (
    <Provider store={store}>
      <StateContext.Provider value={{ ...StateProviders }}>
        <DispatchContext.Provider value={{ ...DispatchProviders }}>
          <Component {...pageProps} />
        </DispatchContext.Provider>
      </StateContext.Provider>
    </Provider>
  );
}

export default MyApp;
