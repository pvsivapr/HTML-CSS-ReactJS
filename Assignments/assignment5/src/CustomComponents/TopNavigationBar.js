import React from "react";
import { Link } from "react-router-dom";

import "./TopNavigationBarStyles.css";

export default class HeadNavBar extends React.Component {
  render() {
    const uiComponent = (
      <div>
        <div className="buttonDivStyle">
          <Link to="/">
            <button className="buttonStyle">Home</button>
          </Link>
          <Link to="/taskone">
            <button className="buttonStyle">Task One</button>
          </Link>
          {/* <Link to="/tasktwo">
            <button className="buttonStyle">Task Two</button>
          </Link> */}
          {/* <Link to="/employeeslist">
            <button className="buttonStyle">Employees List</button>
          </Link> */}
          <Link to="/aboutus">
            <button className="buttonStyle">About Us</button>
          </Link>
          <Link to="/contactus">
            <button className="buttonStyle">Contact Us</button>
          </Link>
        </div>
        {/* <div style={{ height: "20px" }} /> */}
      </div>
    );
    return uiComponent;
  }
}
