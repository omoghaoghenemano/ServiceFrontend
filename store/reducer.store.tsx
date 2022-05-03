import Cookies from "js-cookie";
import categories from "../pages/categories";
import * as actionTypes from "./actions/actionTypes";
import Clientapi from "../pages/api/client";

let categoryres: any = [];
let catdata = Clientapi.get("api/Categories").then((response) => {
  categoryres = response.data;

  console.log("checking context response", categoryres);
});
catdata;

const initialState: ArticleState = {
  articles: [
    {
      user: categoryres,
    },
  ],
};

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case actionTypes.ADD_USERS:
      const userdata = action.payload;
      const newUser: IArticle = {
        user: userdata,
      };
      return {
        ...state,
        articles: state.articles.concat(newUser),
      };

    /*    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: Math.random(), // not really unique but it's just an example
        title: action.article.title,
        body: action.article.body,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter(
        (article) => article.id !== action.article.id
      ); 
      return {
        ...state,
        articles: updatedArticles,
      };
      */
  }
  return state;
};

export default reducer;
