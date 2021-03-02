import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";
import { ApolloProvider } from "@apollo/react-hooks";
import { cache, client } from "./startup/apollo";

persistCache({
  cache,
  storage: new LocalStorageWrapper(localStorage),
  maxSize: false,
  debug: false,
}).then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
});

serviceWorkerRegistration.register();
