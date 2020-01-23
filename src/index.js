import React from "react";
import ReactDOM from "react-dom";
import Home from "./home";
import Stepper from "./form";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const routes = (
  <HashRouter>
    <div className="row">
      <div className="col-3">
        <button className="Primary">
          <Link to="/" className="link">
            Home
          </Link>
        </button>

        <Link to="/form" className="link">
          Stepper
        </Link>
      </div>
      <div className="tabs">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/form" component={Stepper}></Route>
        </Switch>
      </div>
    </div>
  </HashRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
