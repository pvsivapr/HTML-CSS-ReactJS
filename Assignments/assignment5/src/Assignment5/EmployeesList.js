import React, { useEffect, useState } from "react";
import Axios from "axios";
// import EmployeeRestService from "./BAL/EmployeeAPI";

export function EmployeeDetailsList(params) {
  const [serviceData, setServiceData] = useState({}); //({ data: [] });

  useEffect(() => {
    // var response = EmployeeRestService.getEmployeesList("employees");
    // console.log(response);
    // setServiceData(response);
    EmployeeListResult();
  }, []);

  var EmployeeListResult = async function() {
    //chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
    Axios.get("https://reqres.in/api/users?page=2", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    })
      .then(
        response => {
          console.log("response");
          console.log(response.data);
          console.log(response.data.data);
          console.log(response.data.data[0]);
          setServiceData(response.data);
          //return response;
        },
        error => {
          console.log("error");
          console.log(error);
          //setServiceData(error);
          //return error;
        }
      )
      .catch(exception => {
        console.log(`Error: ${exception}`);
        //setServiceData(exception);
        //return exception;
      });
  };

  // function dataTable(eachItemData) {
  //   const tableUIComponent = (
  //     <tr>
  //       {eachItemData.map(itemData => (
  //         <td>{itemData}</td>
  //       ))}
  //     </tr>
  //   );
  //   return tableUIComponent;
  // }

  // function employeeListView(data) {
  //   if (data !== undefined) {
  //     const keys = Object.keys(data[0]);
  //     console.log(keys);

  //     const employeeLVUIComponent = (
  //       <div>
  //         {
  //           <table border="1">
  //             {dataTable(keys)}
  //             {data.map(item => dataTable(Object.values(item)))}
  //             {/* {data.map(item => (
  //               <tr>
  //                 <td>{item.id}</td>
  //                 <td>{item.first_name}</td>
  //                 <td>{item.last_name}</td>
  //                 <td>{item.email}</td>
  //                 <td>
  //                   <image src={item.first_name} />
  //                 </td>
  //               </tr>
  //             ))} */}
  //             {/* {serviceData.data ? (
  //               serviceData.data.map(item => <li>{item.first_name}</li>)
  //             ) : (
  //               <div />
  //             )} */}
  //           </table>
  //         }
  //       </div>
  //     );
  //     return employeeLVUIComponent;
  //   }
  // }

  function getEachEmployeeDetail(employeeItem) {}

  function updateEmployeeItem(employeeItem) {
    var item = getEachEmployeeDetail(employeeItem);
  }

  function employeeListView(data) {
    if (data !== undefined) {
      const keys = Object.keys(data[0]);
      console.log(keys);

      const employeeLVUIComponent = (
        <div>
          {
            <table border="1">
              <tr>
                <td>Id</td>
                <td>FirstName</td>
                <td>LastName</td>
                <td>Email</td>
                <td>Image</td>
                <td />
                <td />
              </tr>
              {/* {dataTable(keys)} */}
              {data.map(item => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>
                    <image src={item.first_name} />
                  </td>
                  <td>
                    <button onClick={() => this.getEachEmployeeDetail(item)}>
                      Get Details
                    </button>
                  </td>
                  <td>
                    <button onClick={() => this.updateEmployeeItem(item)}>
                      Update
                    </button>
                  </td>
                </tr>
              ))}
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
      {employeeListView(serviceData.data)}
      {/* <ul>
        {serviceData.data ? (
          serviceData.data.map(item => <li>{item.first_name}</li>)
        ) : (
          <div />
        )}
      </ul> */}
    </div>
  );
  return uiComponent;
}
