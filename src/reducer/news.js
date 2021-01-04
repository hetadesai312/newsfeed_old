import * as actionTypes from "../action/type";

const initialState = {
  topHeadlines: [],
  topArticles: [],
  trending: [],
};

export const news = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOP_HEADLINES:
      return {
        ...state,
        topHeadlines: [...action.data],
      };
    case actionTypes.TOP_ARTICLES:
      return {
        ...state,
        topArticles: [...action.data],
      };
    case actionTypes.TRENDING:
      return {
        ...state,
        trending: [...action.data],
      };
    default:
      return state;
  }
};
