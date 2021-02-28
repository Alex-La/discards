import React, { Suspense, lazy } from "react";

import { Switch, Route } from "react-router-dom";

import Lazy from "../Components/Loaders/Lazy";
import NotFound from "../Components/Errors/NotFound";
const Main = lazy(() => import("../Pages/Main"));
const Profile = lazy(() => import("../Pages/Profile"));

const RenderPrivateRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Suspense fallback={<Lazy />}>
          <Main />
        </Suspense>
      </Route>
      <Route path="/profile" component={Profile} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default RenderPrivateRoutes;
