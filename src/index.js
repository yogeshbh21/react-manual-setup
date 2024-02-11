// const React = require("react");
// const reactDomClient = require("react-dom/client");
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";

// Render your React component instead
const root = createRoot(document.getElementById("app"));

root.render(<App />);
