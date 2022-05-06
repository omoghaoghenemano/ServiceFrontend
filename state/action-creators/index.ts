import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"

export const depositMoney = (amount: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}
export const storecategory = (category: any) => {
    return (dispatch:Dispatch<Action> ) => {
        dispatch({
            type: ActionType.CATEGORY,
            payload:category
        })
    
    }
}
export const storeservices = (services: any) => {
    return (dispatch:Dispatch<Action> ) => {
        dispatch({
            type: ActionType.SERVICEVIAID,
            payload:services
        })
    
    }
}
export const mainServices = (mainservices: any) => {
    return (dispatch:Dispatch<Action> ) => {
        dispatch({
            type: ActionType.SERVICE,
            payload:mainservices
        })
    
    }
}
export const withdrawMoney = (amount: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}
export const user = (amount : any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.USER,
            payload: amount
        })
    }
}
export const bankrupt = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUPT
        })
    }
}