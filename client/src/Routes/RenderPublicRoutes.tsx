import React, { lazy } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

const Login = lazy(() => import("../Pages/Login"));
const Registration = lazy(() => import("../Pages/Registration"));

const RenderPublicRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/registration" component={Registration} />
      <Redirect to="/" />
    </Switch>
  );
};

export default RenderPublicRoutes;
