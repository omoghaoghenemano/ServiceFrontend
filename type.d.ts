interface IArticle {
  

    user: [],
   
  }
   
  type ArticleState = {
    articles: IArticle[];
  };
  
  type ArticleAction = {
    type: any;
    payload : any;
  };
  
  type DispatchType = (args: ArticleAction) => ArticleAction;

  