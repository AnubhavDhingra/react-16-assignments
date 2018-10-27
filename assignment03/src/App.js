import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import Course from "./containers/Course/Course";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/users" exact component={Users} />
          <Route path="/course/:id" exact component={Course} />
          <Redirect from="/all-courses" exact to="/courses" />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
