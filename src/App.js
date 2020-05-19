import React from "react";
import { LandingPage } from "./landing.page";
import { AppLayout } from "./app.layout";
import { ProtectedRoute } from "./protected.route";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute exact path="/app" component={AppLayout} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
