//https://www.codingame.com/playgrounds/9799/learn-solve-call-apply-and-bind-methods-in-javascript
//https://www.w3schools.com/js/js_this.asp
//https://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
//https://www.geeksforgeeks.org/javascript-function-binding/



import React from "react";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      userText: ""
    };
  }

  // onUserTextChanged = value => {
  //   console.log(value);
  //   if (value !== this.state.userText) {
  //     this.setState({ userText: value });
  //   }
  // };

  onUserTextChanged = this.onUserTextChanged.bind(this);
  onUserTextChanged(event) {
    // console.log("you removed event from brackets");
    // console.log(event.target); //event.target -> is  our input in this context
    let uText = event.target.value;
    this.setState({ userText: uText });
  }

  // overerere = this.bind(this);
  heza = this.overerere.bind(this);
  overerere(event) {
    console.log(event.target.value);
  }

  onCLickEvent(textElement) {
    console.log(textElement);
  }
  // this.onTodoChange = this.onTodoChange.bind(this)

  render() {
    const uiComponent = (
      <div>
        <input
          type="text"
          // onChange={e => this.onUserTextChanged(e.target.value)}
          onChange={this.onUserTextChanged}
        />
        {/* <input
          type="text"
          // onChange={e => this.onUserTextChanged(e.target.value)}
          onChange={e => this.onCLickEvent(e)}
        /> */}

        <input
          type="text"
          // onChange={e => this.onUserTextChanged(e.target.value)}
          onChange={this.heza}
        />

        <p>{this.state.userText}</p>
      </div>
    );
    return uiComponent;
  }
}


/*
import React from "react";

import LocalRouter from "./LocalRouter.js";
import { Link } from "react-router-dom";

/*
https://reactjs.org/docs/typechecking-with-proptypes.html
* /

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const buttonStyle = {
      margin: 20
    };

    const uiComponent = (
      <div>
        <div>
          {/* <TaskOne /> * /}
          {/* <Link to="/">
            <button>Home</button>
          </Link> * /}
          <Link to="/Assignment_TaskOne">
            <button>TaskOne</button>
          </Link>
          <Link to="/Assignment_TaskTwo">
            <button>TaskTwo</button>
          </Link>
        </div>
        <LocalRouter />
      </div>
    );
    return uiComponent;
  }
}

*/