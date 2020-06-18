import React from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux";
import thunk from "redux-thunk";


// import Home from "./Home.js";
import LocalRouter from "./LocalRouter.js";
import RootReducer from "./Assignment6/reducers/RootReducer";
// import postsDispatcher from "./Assignment6/reducers/UsersListReducer.js";


const store = createStore(RootReducer, applyMiddleware(thunk));

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
