import React, { Suspense } from "react";

import { UserContext } from "../context/UserContext";

import ErrorBoundary from "../Components/Errors/ErrorBoundary";
import Preloader from "../Components/Loaders/Preloader";

import { QueryResult, useQuery } from "@apollo/react-hooks";
import ME_QUERY from "../graphql/queries/me";

import RenderPrivateRoutes from "./RenderPrivateRoutes";
import RenderPublicRoutes from "./RenderPublicRoutes";

const Routes: React.FC = () => {
  const { data }: QueryResult = useQuery(ME_QUERY);

  const { me } = data || {};

  return (
    <ErrorBoundary>
      <Suspense fallback={<Preloader />}>
        <UserContext.Provider value={me}>
          {me ? <RenderPrivateRoutes /> : <RenderPublicRoutes />}
        </UserContext.Provider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routes;
