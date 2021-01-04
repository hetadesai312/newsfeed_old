import React from "react";
import {connect } from "react-redux";
import * as actions from "../action/newsfeed";

class Trending extends React.Component {
  componentDidMount() {
    this.props.getTrending();
  }
  render() {
    return (
      <div className="row">
        {this.props.news.trending.map((item, index) => {
          return (
            <div className="col-md-3 pb-2" key={index}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="no-decoration"
              >
                <div className="card h-100">
                  <img
                    src={item.urlToImage}
                    className="card-img-top img-thumbnail"
                    alt={item.urlToImage}
                    loading="lazy"
                  />
                  <div className="card-body p-0">
                    <p className="text-light">{item.title}</p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapdispatchtoprops = (dispatch) => {
  return {
    getTrending: () => dispatch(actions.trending()),
  };
};
const mapStatetoProps = ({ news: { news } }) => {
  return {
    news,
  };
};
export default connect(mapStatetoProps, mapdispatchtoprops)(Trending);
