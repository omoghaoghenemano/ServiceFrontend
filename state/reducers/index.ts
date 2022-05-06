import { combineReducers } from "redux";
import AppReducer from "./mainReducer"


const reducers = combineReducers({
    appstate: AppReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>