import React, { Component, Fragment } from "react";
import { Route } from "react-router";

import "./custom.css";
import { Login } from "./components/Login";
import { CreateAccount } from "./components/CreateAccount";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={CreateAccount} />
      </Fragment>
    );
  }
}
