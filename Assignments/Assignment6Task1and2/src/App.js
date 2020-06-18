import React from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import LocalRouter from "./LocalRouter.js";
import RootReducer from "./Assignment6/reducers/RootReducer";

const store = createStore(RootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <LocalRouter />
        </BrowserRouter>
      </Provider>
    </div>
  );
}