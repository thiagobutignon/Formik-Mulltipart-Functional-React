import React from "react";
import ReactDOM from "react-dom";
import Home from "./home";
import Stepper from "./form";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

const routes = (
  <HashRouter>
    <div>
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
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
