import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/custom.css";
//import bgimage from "./preview16.jpg";

import Dashboard from "./component/Dashboard";


function App() {
  return (
    <div className="App">
      <header className="masthead">
        <div className="overylay"></div>
        <div className="row justify-content-md-center m-4">
          <div className="col-md-12 mx-auto justify-content-md-center">
            <form>
              <div className="form-row justify-content-md-center">
                <div className="col-lg-9 col-md-9 mb-2 c mb-md-0">
                  {/* <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email..."
                  /> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Dashboard} />
           
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

