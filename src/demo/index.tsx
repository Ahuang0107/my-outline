import * as React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import stores from "~/stores";
import Layout from "~/components/Layout";

const element = window.document.getElementById("react-page");

if (element) {
  const App = () => (
    <React.StrictMode>
      <Provider {...stores}>
        <Layout />
      </Provider>
    </React.StrictMode>
  );
  render(<App />, element);
}
