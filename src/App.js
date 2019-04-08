import React, { Component, Fragment } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Movies from "./component/Movies";
import NotFound from "./component/NotFound";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/not-found" component={NotFound} />
          <Redirect exact from="/" to="/movies" />
          <Redirect to="not-found" />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
