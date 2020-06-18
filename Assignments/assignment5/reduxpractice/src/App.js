import React from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux"
import { Provider } from "react-redux";

import Home from "./Home.js";
import LocalRouter from "./LocalRouter.js";
import Counting from "./ReduxComoponents/reducers/CounterReducer.js";


const store = createStore(Counting);

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <Provider store={store}>
        <BrowserRouter>
          <LocalRouter />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
