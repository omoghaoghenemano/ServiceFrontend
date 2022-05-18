import Cookies from "js-cookie";
import React from "react";
import Clientapi from "../pages/api/client";

let categoryres;
let catdata = Clientapi.get("api/Categories").then((response) => {
  categoryres = response.data;
  console.log("checking context response", categoryres);
});
const initialAuthState = {
  isLoggedIn: !!Cookies.get("auth_token"),
  user: null,

  category: !!catdata,
  favorite: null,
  categorydata: null,
};

const login = (draft: any) => {
  console.log(">>>>>> Logging in ");
  draft.isLoggedIn = true;
  return draft;
};

const addCategories = (draft: any, payload: any) => {
  draft.categorydata = payload;
  return draft;
};
const displayCategories = (draft: any) => {
  draft.category = true;
  return draft;
};

const logout = (draft: any) => {
  console.log("<<<<>>>>>>>>>> Logging out ");
  draft.isLoggedIn = false;
  draft.user = initialAuthState.user;
  return draft;
};

const addUser = (draft: any, payload: any) => {
  draft.user = payload;
  return draft;
};

const removeUser = (draft: any, payload: any) => {
  draft.user = initialAuthState.user;
  return draft;
};
const getfavorite = (draft: any, payload: any) => {
  draft.user = initialAuthState.favorite;
  return draft;
};
const AuthReducer = (draft: any, action: any) => {
  const actions: any = {
    login: () => {
      login(draft);
    },
    logout: () => {
      logout(draft);
    },
    addUser: () => {
      addUser(draft, action.payload);
    },
    getfavorite: () => {
      getfavorite(draft, action.payload);
    },

    removeUser: () => {
      removeUser(draft, action.payload);
    },
    addCategories: () => {
      addCategories(draft, action.payload);
    },
    displayCategories: () => {
      displayCategories(draft);
    },
  };

  draft = actions[action.type]();
};

export { AuthReducer, initialAuthState };
