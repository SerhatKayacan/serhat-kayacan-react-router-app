import React from "react";
import auth from "./auth";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const AppLayout = (props) => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/app">Home</Link>
          </li>
          <li>
            <Link to="/app/about">About</Link>
          </li>
          <li>
            <Link to="/app/dashboard">Dashboard</Link>
          </li>
        </ul>
        <div>
          <h1>App Layout</h1>
          <button
            onClick={() => {
              auth.logout(() => {
                props.history.push("/");
              });
            }}
          >
            Logout
          </button>
        </div>
        <hr />
        <Switch>
          <Route exact path="/app">
            <Home />
          </Route>
          <Route path="/app/about">
            <About />
          </Route>
          <Route path="/app/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
