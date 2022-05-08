import * as React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import stores from "~/stores";
import Show from "~/components/Show";
import Button from "~/components/Button";

const element = window.document.getElementById("react-page");

if (element) {
  const App = () => (
    <React.StrictMode>
      <Provider {...stores}>
        <h1>Hello World!</h1>
        <Show />
        <Button />
      </Provider>
    </React.StrictMode>
  );
  render(<App />, element);
}
