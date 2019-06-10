import React from "react";
import { render } from "react-dom";
import Generation from "./components/Generation";
import Dragon from "./components/Dragon";

import "./styles/reset.css";
import "./styles/index.css";

render(
  <div>
    <h1 className="title">Dracarys</h1>
    <Generation />
    <Dragon />
  </div>,
  document.getElementById("root")
);
