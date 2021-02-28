import React, { lazy } from "react";

import { Switch, Route } from "react-router-dom";

const Login = lazy(() => import("../Pages/Login"));
const Registration = lazy(() => import("../Pages/Registration"));

const RenderPublicRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/registration" component={Registration} />
    </Switch>
  );
};

export default RenderPublicRoutes;
