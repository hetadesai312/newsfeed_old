import React from "react";

let prevnumber = -1;
const TopHeadlines = (props) => {
  let rnumber = (prevnumber) => {
    let newnumber = prevnumber < 0 ? 0 : prevnumber;

    while (newnumber !== prevnumber) {
      let a = Math.floor(Math.random() * (6 - 3 + 1) + 3);
      newnumber = a;

      if (newnumber === prevnumber && newnumber === 6) continue;
      break;
    }

    return (prevnumber = newnumber);
  };
  return (
    <div className="row">
      {props.headlines.map((item, index) => {
        let colnumber = rnumber(prevnumber);

        if (colnumber === 6) {
          return (
            <div className="col-md-6 pb-2" key={index}>
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
                  />
                  {/* <div className="card-body p-0">
                          
                          <p className="text-light">{item.title}</p>
                        </div> */}
                </div>
              </a>
            </div>
          );
        } else {
          return (
            <div className="col-md-3 pb-2">
              <a
                href={item.url}
                target="_blank"
                className="no-decoration"
                rel="noopener noreferrer"
              >
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
        }
      })}
    </div>
  );
}; 

export default TopHeadlines;
