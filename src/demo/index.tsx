import * as React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import { Router } from "react-router-dom";
import { LazyMotion } from "framer-motion";
import stores from "~/stores";
import Routes from "~/routes";
import history from "./utils/history";
import GlobalStyles from "~/styles/globals";
import "./font.css";

const element = window.document.getElementById("react-page");

const loadFeatures = () => import("framer-motion").then((res) => res.domMax);

if (element) {
  const App = () => (
    <React.StrictMode>
      <Provider {...stores}>
        <GlobalStyles />
        <LazyMotion features={loadFeatures}>
          <Router history={history}>
            <Routes />
          </Router>
        </LazyMotion>
      </Provider>
    </React.StrictMode>
  );
  render(<App />, element);
}
