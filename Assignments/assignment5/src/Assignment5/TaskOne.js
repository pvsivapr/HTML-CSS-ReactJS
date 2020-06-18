import React from "react";
import { sessionDataStore } from "../CustomComponents/Storage";
import Axios from "axios";

export default class TaskOnes extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     employeesList: []
  //   };
  // }

  componentDidMount() {
    console.log("Task One Component Did Mount");
    var assignedKey = sessionDataStore.get("assignedKey");
    if (assignedKey !== undefined || assignedKey !== "") {
      console.log("Key is available");
    } else {
      console.log("Key is not available");
    }
  }

  getEmployeesList() {
    // var value = document.getElementById("keyEntry").value;
    // this.props.history.push("/employeeslist");
    // console.log(this.props);
    const url = "http://dummy.restapiexample.com/api/v1/employees";
    //"https://reqres.in/api/users?page=2"
    Axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    })
      .then(
        response => {
          console.log("response: ");
          //this.setState({ employeesList: response.data.data });
          // this.props.history.push("/tasktwo", {
          //   vals: response.data.data
          // });
          this.props.history.push({
            pathname: "/tasktwo",
            state: { EmployeeDetails: response.data.data }
          });
          console.log("Navigating to Task Two");
        },
        error => {
          console.log("error: ");
          console.log(error);
        }
      )
      .catch(exception => {
        console.log(`Error: ${exception}`);
      });
  }

  render() {
    const uiComponent = (
      <div>
        <div style={{ height: "50px" }} />
        <button onClick={() => this.getEmployeesList()}>Get Employees</button>
      </div>
    );
    return uiComponent;
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     assignedKey: "",
  //     keyValue: ""
  //   };
  // }

  // componentDidMount() {
  //   console.log("Component Did Mount");
  //   var assignedKey = sessionDataStore.get("assignedKey");
  //   if (assignedKey !== undefined && assignedKey !== "") {
  //     this.setState({ assignedKey: assignedKey });
  //   } else {
  //     this.setState({ assignedKey: "" });
  //   }
  // }

  // OnSetKey = () => {
  //   // var value = document.getElementById("keyEntry").value;
  //   sessionDataStore.set("assignedKey", this.state.keyValue);
  // };

  // OnKeyChange(value) {
  //   this.setState({ keyValue: value });
  // }

  // render() {
  //   const uiComponent = (
  //     <div>
  //       <p>{this.state.assignedKey}</p>
  //       <input
  //         id="keyEntry"
  //         type="Text"
  //         placeholder="Enter Key"
  //         onChange={e => this.OnKeyChange(e.target.value)}
  //       />
  //       <button onClick={this.OnSetKey()}>Set</button>
  //     </div>
  //   );
  //   return uiComponent;
  // }
}
