import React, { lazy } from "react";

import { Switch, Route } from "react-router-dom";

import NotFound from "../Components/Errors/NotFound";
const Login = lazy(() => import("../Pages/Login"));
const Registration = lazy(() => import("../Pages/Registration"));

const RenderPublicRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default RenderPublicRoutes;
