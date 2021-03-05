import React, { Suspense, lazy, Fragment, useState } from "react";

import { Switch, Route } from "react-router-dom";
import { BottomNavContext } from "../context/BottomNavContext";

import BottomNav from "../Components/BottomNav";
import Lazy from "../Components/Loaders/Lazy";
import NotFound from "../Components/Errors/NotFound";
const Main = lazy(() => import("../Pages/Main"));
const Profile = lazy(() => import("../Pages/Profile"));
const Settings = lazy(() => import("../Pages/Settings"));
const Contacts = lazy(() => import("../Pages/Contacts"));
const Partners = lazy(() => import("../Pages/Partners"));

const RenderPrivateRoutes: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(true);

  return (
    <Fragment>
      <BottomNavContext.Provider value={{ setShowNav }}>
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<Lazy />}>
              <Main />
            </Suspense>
          </Route>
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/partners" component={Partners} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BottomNavContext.Provider>
      <BottomNav showNav={showNav} />
    </Fragment>
  );
};

export default RenderPrivateRoutes;
