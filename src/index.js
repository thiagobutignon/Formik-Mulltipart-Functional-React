import React from "react";
import ReactDOM from "react-dom";
import Home from "./home";
import Form from "./form";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

const routes = (
  <HashRouter>
    <div>
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/form" className="link">
          Wizard
        </Link>
      </div>
      <div className="tabs">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/form" component={Form}></Route>
        </Switch>
      </div>
    </div>
  </HashRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
