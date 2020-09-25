import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
const Home = lazy(() => import("pages/Home"));
function Router() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default Router;
