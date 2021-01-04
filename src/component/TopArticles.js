import React from "react";

const TopArticles = (props) => {
  return (
    <div className="row">
      {props.articles.map((item,index) => {
        return (
          <div className="col-md-3 pb-2" key={index}>
            <a href={item.url} target="_blank" className="no-decoration" rel="noopener noreferrer" >
              <div className="card h-100">
                <img
                  src={item.urlToImage}
                  className="card-img-top img-thumbnail"
                  alt={item.urlToImage}
                />
                <div className="card-body p-0">
                  {/* <h6 className="card-title">{item.title}</h6> */}
                  <p className="text-light">{item.title}</p>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default TopArticles;
