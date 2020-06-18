import React from "react";
import "./styles.css";

import AppRouter from "./LocalRouter.js";
import { BrowserRouter } from "react-router-dom";
import HeadNavBar from "./CustomComponents/TopNavigationBar";
import { Loader } from "./CustomComponents/Loader";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <h1>Hello CodeSandbox</h1> */}
        {/* <h2>Start editing to see some magic happen!</h2> */}
        {/* <Home /> */}
        {/* <div style={{ width: "100%", display: "flex", flexFlow: "Vertical" }}>
          <HeadNavBar />
          <Loader />
        </div> */}
        <HeadNavBar />
        <Loader />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}
