import React from "react";
import { render } from "react-dom";
import Generation from "./components/Generation";
import Dragon from "./components/Dragon";

render(
  <div>
    <h2>Dracarys From React</h2>
    <Generation />
    <Dragon />
  </div>,
  document.getElementById("root")
);