import React from "react";
import "./Movies.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Search from "./components/search";
import Favorites from "./components/favorites";

class Movies extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/app/movies">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/app/movies/favorites">Favorites</Link>
              </li>
            </ul>
          </nav>
          <div className="container">
            <Switch>
              <Route path="/app/movies/favorites">
                <Favorites />
              </Route>
              <Route path="/app/movies">
                <Search />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Movies;
