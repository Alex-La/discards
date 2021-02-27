import React, { Fragment } from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";

import { ToastContainer, ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ApolloProvider } from "@apollo/react-hooks";
import client from "./startup/apollo";

const toastSettings: ToastContainerProps = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: true,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
};

const App: React.FC = () => {
  return (
    <Fragment>
      <ApolloProvider client={client}>
        <Router>
          <Routes />
        </Router>
      </ApolloProvider>
      <ToastContainer {...toastSettings} />
    </Fragment>
  );
};

export default App;
