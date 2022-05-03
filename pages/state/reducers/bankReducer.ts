import categories from "../../categories";
import { ActionType } from "../action-types/index"
import { Action } from "../actions"


const initialState = {
    user: [],
    categories: false
}

const reducer = (state: any = initialState, action: Action): any => {
    switch (action.type){
        case ActionType.DEPOSIT:
           
            return  {
                ...state,
                categories: true,
                user:action.payload
            }
        case ActionType.WITHDRAW:
            return action.payload;
        case ActionType.BANKRUPT:
            return 0;
        case ActionType.USER:
            return state;
        default:
            return state
    }
}

export default reducer