import React, { Component, Fragment } from "react";
import { Route } from "react-router";

import "./custom.css";
import { Login } from "./components/Login";
import { CreateAccount } from "./components/CreateAccount";
import { Profile } from "./components/Profile";

export default class App extends Component {
  static displayName = App.name;

  render() {
    document.documentElement.setAttribute('data-theme', 'OODCoreStyleThemeDark');
    return (
      <Fragment>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={CreateAccount} />
        <Route exact path="/" component={Profile} />
      </Fragment>
    );
  }
}
