
import Cookies from 'js-cookie'

const initialAuthState = {
    isLoggedIn: !!Cookies.get("auth_token"),
    user: null
}


const login = (draft:any) => {
    console.log(">>>>>> Logging in ")
    draft.isLoggedIn = true
    return draft
}

const logout = (draft:any) => {
    console.log("<<<<>>>>>>>>>> Logging out ")
    draft.isLoggedIn = false
    draft.user = initialAuthState.user
    return draft
}

const addUser = (draft:any, payload:any) => {
    draft.user = payload
    return draft
}

const removeUser = (draft:any, payload:any) => {
    draft.user = initialAuthState.user
    return draft
}

const AuthReducer = (draft:any, action:any) => {
    const actions:any = {
        login: () => {login(draft)},
        logout: () => {logout(draft)},
        addUser: () => {addUser(draft, action.payload)},
        removeUser: () => {removeUser(draft, action.payload)},
    }

    draft = actions[action.type]()
}

export {AuthReducer, initialAuthState}