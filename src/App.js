import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import MovieForm from "./components/MovieForm";
import NotFound from "./components/NotFound";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route path="/Movies/:id" exact component={MovieForm} />
          <Route path="/Movies" exact component={Movies} />
          <Route path="/not-found" exact component={NotFound} />
          <Redirect from="/" to="/movies" />
          <Route path="/" exact component={Movies} />
          <Redirect from="*" to="/not-found" />
        </Switch>
      </Fragment>
    );
  }
}
