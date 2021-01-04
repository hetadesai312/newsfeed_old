import axios from "axios";
import * as actionTypes from "./type";

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("cc1b19debfe9478893711e74550aa0f8");

const dispatch_topHeadlines = (data) => {
  return {
    type: actionTypes.TOP_HEADLINES,
    data,
  };
};
export const topHeadlines = () => async (dispatch) => {
  await newsapi.v2
    .topHeadlines({
      country: "us",
    })
    .then((response) => {
      dispatch(dispatch_topHeadlines(response.articles));
    })
    .catch((err) => {
      console.log(err);
    });
};

const dispatch_topArticles = (data) => {
  return {
    type: actionTypes.TOP_ARTICLES,
    data,
  };
};
export const topArticles = () => async (dispatch) => {
  await axios
    .get(
      "https://newsapi.org/v2/everything?q=apple&from=2020-06-03&to=2020-06-03&sortBy=popularity&apiKey=cc1b19debfe9478893711e74550aa0f8"
    )
    .then((response) => {
      dispatch(dispatch_topArticles(response.data.articles));
    })
    .catch((err) => {
      console.log(err);
    });
};

const dispatch_trending = (data) => {
  return {
    type: actionTypes.TRENDING,
    data,
  };
};
export const trending = () => async (dispatch) => {
  await axios
    .get(
      "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=cc1b19debfe9478893711e74550aa0f8"
    )
    .then((response) => {
      dispatch(dispatch_trending(response.data.articles));
    })
    .catch((err) => {
      console.log(err);
    });
};
