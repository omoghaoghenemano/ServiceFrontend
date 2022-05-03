import * as actionTypes from "./actionTypes";

export function addArticle(payload: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_USERS,
    payload
  };

  return simulateHttpRequest(action);
}


export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
