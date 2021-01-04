import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../action/newsfeed";
import TopHeadlines from "./TopHeadlines";
import TopArticles from "./TopArticles";
import Trending from "./Trending";

class Dashboard extends Component {
  state = {
    headers: [
      { id: 0, name: "Top Headlines", selected: true },
      { id: 1, name: "Top Articles", selected: false },
      { id: 2, name: "Tech crunch", selected: false }      
    ],
    selectedItem: { id: 0, name: "Top Headlines", selected: true },
  };

  componentDidMount() {
    this.props.getTopHeadlines();
    this.props.getTopArticles();
  }
  onClick = (item) => {
    this.state.headers.map((list) => {
      if (list.id === item.id) {
        list.selected = true;
      } else {
        list.selected = false;
      }
      return list;
    });
    this.setState((prev) => ({ refresh: !prev.refresh, selectedItem: item }));
  };
  render() {
    return (
      <>
        <ul class="nav mb-3 sticky-top">
          {this.state.headers.map((item) => {
            return (
              <li
                class={item.selected ? "nav-item selected" : "nav-item"}
                onClick={() => this.onClick(item)}
              >
                <label className="nav-link custom-navlink">{item.name}</label>
              </li>
            );
          })}
        </ul>

        <div className="container-fluid">
          {this.state.selectedItem.id === 0 && (
            <TopHeadlines headlines={this.props.news.topHeadlines} />
          )}
          {this.state.selectedItem.id === 1 && (
            <TopArticles articles={this.props.news.topArticles} />
          )}
          {this.state.selectedItem.id === 2 && <Trending />}
          <Route exact path="/dashboard" component={TopHeadlines} />
        </div>
      </>
    );
  }
}

const mapdispatchtoprops = (dispatch) => {
  return {
    getTopHeadlines: () => dispatch(actions.topHeadlines()),
    getTopArticles: () => dispatch(actions.topArticles()),
  };
};
const mapStatetoProps = ({ news: { news } }) => {
  return {
    news,
  };
};
export default connect(mapStatetoProps, mapdispatchtoprops)(Dashboard);
