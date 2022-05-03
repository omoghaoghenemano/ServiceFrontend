import { ActionType } from "../action-types/index"

interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: any
}

interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload: any
}

interface BankruptAction {
    type: ActionType.BANKRUPT
}

interface UserAction {
    type: ActionType.USER
}
export type Action = DepositAction | WithdrawAction | BankruptAction | UserAction;