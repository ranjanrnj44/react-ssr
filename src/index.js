// import React from "react";
// import { hydrateRoot } from "react-dom/client";

// import App from "./App";

// const container = document.getElementById("root");
// //const container = document.getElementsByTagName("html")[0]

// hydrateRoot(container, <App />);

import * as ReactDOMClient from "react-dom/client";

import App from "./App";

const container = document.getElementById("root");

// Create *and* render a root with hydration.
ReactDOMClient.hydrateRoot(container, <App tab="home" />);
