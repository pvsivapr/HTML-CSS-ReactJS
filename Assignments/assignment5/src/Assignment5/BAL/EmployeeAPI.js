import Axios from "axios";

import { baseURL } from "./Helpers";

export default class EmployeeRestService {
  //employees
  static getEmployeesList(path) {
    // console.log(path);
    // console.log(baseURL + path);
    // return baseURL + path;
    Axios.get(baseURL + path)
      .then(
        response => {
          console.log("response");
          return response;
        },
        error => {
          console.log("error");
          return error;
        }
      )
      .catch(exception => {
        console.log(`Error: ${exception}`);
        return exception;
      });
  }
}
