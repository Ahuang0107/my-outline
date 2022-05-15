import * as React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import { Router } from "react-router-dom";
import stores from "~/stores";
import Routes from "~/routes";
import history from "./utils/history";
import GlobalStyles from "~/styles/globals";
import "./font.css";

const element = window.document.getElementById("react-page");

if (element) {
  const App = () => (
    <React.StrictMode>
      <Provider {...stores}>
        <GlobalStyles />
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    </React.StrictMode>
  );
  render(<App />, element);
}
