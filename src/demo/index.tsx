import * as React from "react";
import { render } from "react-dom";

const element = window.document.getElementById("react-page");

if (element) {
  const App = () => (
    <React.StrictMode>
      <h1>Hello World!</h1>
    </React.StrictMode>
  );
  render(<App />, element);
}
