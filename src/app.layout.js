import React from "react";
import auth from "./auth";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movies from "./movies-components/Movies";
import App from "./todos/app";

export const AppLayout = (props) => {
  return (
    <div className="container">
      <Router>
        <div>
          <ul className="nav">
            <li className="nav-item mt-2">
              <Link to="/app">Home</Link>
            </li>
            <li className="nav-item mt-2">
              <Link to="/app/movies">Movies</Link>
            </li>
            <li className="nav-item mt-2">
              <Link to="/app/todos">Todos</Link>
            </li>
            <li className="nav-item ml-auto">
              <a
                className="nav-link"
                href=""
                onClick={() => {
                  auth.logout(() => {
                    props.history.push("/");
                  });
                }}
              >
                {" "}
                Logout
              </a>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/app">
              <Home />
            </Route>
            <Route path="/app/movies">
              <Movies />
            </Route>
            <Route path="/app/todos">
              <App />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
