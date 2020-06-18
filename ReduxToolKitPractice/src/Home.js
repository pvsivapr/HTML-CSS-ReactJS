import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {

  render() {
    const uiComponent = (
      <div>
        <Link to="/counter">
          <button>Counter</button>
        </Link>
        <Link to="/usersList"><button>Users List</button></Link>
      </div>
    );
    return uiComponent;
  }
}
