import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

const rootElement = document.getElementById("root");
let count = 0;

 ReactDOM.render(<App count={count} />, rootElement)