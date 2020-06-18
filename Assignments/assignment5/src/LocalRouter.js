import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home.js";
import AboutUs from "./BasicPages/AboutUs.js";
import ContactUs from "./BasicPages/ContactUs.js";
import { EmployeeDetailsList } from "./Assignment5/EmployeesList.js";
import TaskOne from "./Assignment5/TaskOne.js";
import TaskTwoEmployeeDetailsList from "./Assignment5/TaskTwoEmployeeList.js";
import TaskThreeEachEmployeeDetail from "./Assignment5/TaskThreeEachEmployeeDetail.js";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}>
        {/* <Home /> */}
      </Route>
      <Route path="/employeeslist">
        <EmployeeDetailsList />
      </Route>
      <Route path="/taskone" component={TaskOne}>
        {/* <TaskOne /> */}
      </Route>
      {/* <Route path="/tasktwo">
        <TaskTwoEmployeeDetailsList />
      </Route> */}
      <Route path="/tasktwo" component={TaskTwoEmployeeDetailsList}>
        {/* <TaskTwoEmployeeDetailsList /> */}
      </Route>
      <Route
        path="/taskthreeEmployee/{id}"
        component={TaskThreeEachEmployeeDetail}
      />
      <Route path="/aboutus">
        <AboutUs />
      </Route>
      <Route path="/contactus">
        <ContactUs />
      </Route>
    </Switch>
  );
};

export default AppRouter;
