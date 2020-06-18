import React, { useEffect, useState } from "react";
import Axios from "axios";
// import Axios from "axios";

export default function TaskThreeEachEmployeeDetail(props) {
  const [empData, setEmpData] = useState({});
  const [isDataObtained, setIsDataObtained] = useState(false);

  useEffect(() => {
    console.log("Task Three component started");
    console.log(props);
    console.log(props.data);
    getEmployeeData(props.data.match.params.id);
    console.log("done useEffect");
  }, [props]);

  const getEmployeeData = (async (empID) => {
    console.log(`http://dummy.restapiexample.com/api/v1/employee/${empID}`);
    var response = await Axios.get(`http://dummy.restapiexample.com/api/v1/employee/1`
    // , {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //     }
    //   }
    );
    console.log(response);
    // Axios.get(`http://dummy.restapiexample.com/api/v1/employee/${empID}`, {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //   }
    // })
    //   .then(
    //     response => {
    //       console.log("response: ");
    //       console.log(response);
    //       setEmpData(response.data);
    //       setIsDataObtained(true);
    //     },
    //     error => {
    //       console.log("error: ");
    //       console.log(error);
    //     }
    //   )
    //   .catch(exception => {
    //     console.log(`Error: ${exception}`);
    //   });
  }) 

  function employeeDataView(data) {
    if (data !== undefined) {
      console.log(data);

      const employeeLVUIComponent = (
        <div>
          {
            <table style={{ textAlign: "start" }} border="1">
              <td>
                <tr>Id</tr>
                <tr>Name</tr>
                <tr>Age</tr>
                <tr>Salary</tr>
              </td>
              <td>
                <tr>{data.data.id}</tr>
                <tr>{data.data.employee_name}</tr>
                <tr>{data.data.employee_age}</tr>
                <tr>{data.data.employee_salary}</tr>
              </td>
              {/* </tbody> */}
            </table>
          }
        </div>
      );
      return employeeLVUIComponent;
    }
  }

  const uiComponent = (
    <div>
      <p>Employees Data</p>
      {isDataObtained ? <div>{employeeDataView(empData)}</div> : <div />}
    </div>
  );
  return uiComponent;
}
