// following this - https://jscomplete.com/learn/complete-intro-react

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const Button = (props) => (
  <button type="submit">{props.label}</button>
);

function Button2({ label }) {
  return <button type="submit">{label}</button>
}

function Button3 ({label}) {
  return React.createElement("button", {
    type: "submit"
  },
  label
  );
}

root.render(
  <StrictMode>
    <App />
    <Button label="Save" />
    <Button2 label="Save2" />
    <Button3 label="Save3" />
  </StrictMode>
);
