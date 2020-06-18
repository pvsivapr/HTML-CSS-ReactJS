import React, { useEffect, useState, Fragment } from "react";
import Axios from "axios";
import { Route, Link } from "react-router-dom";
import TaskThreeEachEmployeeDetail from "./TaskThreeEachEmployeeDetail";
// import Axios from "axios";

export default function TaskTwoEmployeeDetailsList(props) {
  const [employeeData, setEmployeeData] = useState({}); //({ data: [] });
  const [hasEmployeeData, setHasEmployeeData] = useState(false);

  useEffect(() => {
    console.log("Task Two component started");
    console.log(props);
    // console.log(props.match.params);
    // console.log(props.location.state);
    // console.log(props.employeeData);
    console.log(props.location.state);
    if (
      props.location.state !== "undefined" &&
      props.location.state !== undefined &&
      props.location.state !== ""
    ) {
      setEmployeeData(props.location.state.EmployeeDetails);
      setHasEmployeeData(true);
    }
    console.log("done useEffect");
  }, [props]);

  // function getEachEmployeeDetail(employeeItem) {
  //   props.history.push({
  //     pathname: `${props.match.url}/taskthreeEmployee/${employeeItem.id}`
  //   });
  //   console.log("Navigating to Task Three");
  // }

  function updateEmployeeItem(employeeItem) {
    props.history.push({
      pathname: `${props.match.url}/taskthreeEmployee/${employeeItem.id}`
    });
  }

  function employeeListView(data) {
    if (data !== undefined) {
      console.log(data);
      const keys = Object.keys(data[0]);
      console.log(keys);
      
      const employeeLVUIComponent = (
        <div>
          {
            <table border="1">
              <tbody>
                <tr>
                  <td>Id</td>
                  <td>Name</td>
                  <td>Age</td>
                  <td>Salary</td>
                  <td />
                  <td />
                </tr>
                {/* {dataTable(keys)} */}
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.employee_name}</td>
                    <td>{item.employee_age}</td>
                    <td>{item.employee_salary}</td>
                    <td>
                      <Link
                        to={`${props.match.url}/taskthreeEmployee/${item.id}`}
                      >
                        <button>Get Details</button>
                      </Link>
                      {/* <button onClick={() => getEachEmployeeDetail(item)}>
                        Get Details
                      </button> */}
                    </td>
                    <td>
                      <button onClick={() => updateEmployeeItem(item)}>
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        </div>
      );
      return employeeLVUIComponent;
    }
  }

  const uiComponent = (
    <div>
      <p>Employees List</p>
      {hasEmployeeData ? (
        <Fragment>{employeeListView(employeeData)}</Fragment>
      ) : (
        <Fragment />
      )}
      {/* {employeeListView(serviceData.data)} */}
      {/* <ul>
        {serviceData.data ? (
          serviceData.data.map(item => <li>{item.first_name}</li>)
        ) : (
          <div />
        )}
      </ul> */}
      <Route
        path={`${props.match.path}/taskthreeEmployee/:id`}
        render={props => <TaskThreeEachEmployeeDetail data={props} />}
      />
    </div>
  );
  return uiComponent;
}
