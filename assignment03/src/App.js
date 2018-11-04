import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/courses" component={Courses} />
          <Route path="/users" exact component={Users} />
          <Redirect from="/all-courses" exact to="/courses" />
          <Route path="/" exact component={Users} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
