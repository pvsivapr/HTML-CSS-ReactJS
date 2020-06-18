import React from "react";
import { txtReader } from "./CustomComponents/GetTxtContent";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  componentDidMount() {
    txtReader.getTextContent("./../AssignmentTask5.txt");
  }

  render() {
    //https://drive.google.com/file/d/1fWZGv7UTkKs-cW8mQnnsvpcTe6yupqQB/view
    //https://drive.google.com/uc?id=1T8NvlyvvXv1-aD7sJnYvW9sOcojNcM6z
    //https://drive.google.com/file/d/1EIAxeHthWYDbY7OQ1gl8OuB7SFD1TFLE/view?usp=sharing
    //https://drive.google.com/file/d/1roHu_h9YYuWBxsDMnjvIOrpgnH2lulxh/view?usp=sharing
    const uiComponent = (
      <div>
        <Link to="/assignment6">
          <button>Assignment6</button>
        </Link>
        <button>Assignment7</button>
        <p>hello world</p>
        <b>IT Asset Validation Pending</b>
        <b><p>Redux</p></b>
        <p>Configuration</p>
        <p>Install redux and react-redux</p>
        <p>redux is a library and react-redux is a bridge between react and redux</p>
        <p></p>
        {/* <video src="https://drive.google.com/uc?id=11J2ZtNhFdLBuumQ6PmXBc0KvkpKvYgxr" controls muted></video> */}
        {/* <video src="https://drive.google.com/uc?id=1EIAxeHthWYDbY7OQ1gl8OuB7SFD1TFLE" controls muted></video> */}
        {/* <video src="https://drive.google.com/uc?id=1roHu_h9YYuWBxsDMnjvIOrpgnH2lulxh" controls muted></video> */}
        {/* <img src="https://drive.google.com/uc?id=1T8NvlyvvXv1-aD7sJnYvW9sOcojNcM6z"></img> */}
        <div>
          {/* <Route exact component={}></Route> */}
        </div>
      </div>
    );
    return uiComponent;
  }
  // render() {
  //   const uiComponent = (
  //     <div>
  //       <center>
  //         <p>Hello Every One :)</p>
  //         <p>In this project we learned about complex things in routing</p>
  //         <p>
  //           I have three page components, 1) EmployeesList, 2) EmployeeDetail
  //           and 3) UpdateEmployee
  //         </p>
  //         <p>
  //           Employee List -> displays a list of employees, EmployeeDetail ->
  //           shows the details of selected employee, and Update Employee allows
  //           to edit and update the employee details
  //         </p>
  //         <p>
  //           I show EmployeesList and EmployeeDetail in a single page this is
  //           called as nested routing because the url path changes on selecting
  //           the employees, in the same page it self
  //         </p>
  //         <p>and I will show UpdateEmployee in another page</p>
  //         <p>
  //           So we have two pages to navigate and we will be using 3 url paths
  //         </p>
  //         <p>
  //           url paths: Employee List -> /employeeslist, EmployeeDetail ->
  //           /employeeslist/employee/:id, and Update Employee->
  //           /employeeslist/updateemployee/:id
  //         </p>
  //         <p>
  //           Now assume we have 5 buttons in a page and each have to take to take
  //           us to a different page this is called as normal routing{" "}
  //         </p>
  //         <p>
  //           For this type we have to declare the "route" tags in the same parent
  //           page
  //         </p>
  //         <p>
  //           For suppose we have a child to one of the parent page, then if in
  //           case we have to navigate to parent page and this page contains a
  //           button to the child page and also the data of the child page will
  //           have to render in the samep page even the url is different then this
  //           kind of routing as "Nested Routing"
  //         </p>
  //         <p>
  //           General routing will be like
  //           {`<BrowserRouter> <Route1 /> <Route2 /> <Route3 /> <Route4 />
  //           <Route5/> </BrowserRouter>`}
  //         </p>
  //         <p>
  //           Nested routing will be like
  //           {`<BrowserRouter /> <Route1 /> <Route2> <Route2_Child1 /> <Route2_Child2> <Route2_Child2_Child1 /> </Route2_Child2> <Route2 /> <Route3 /> <Route4 /> <Route5 /> </BrowserRouter>`}
  //         </p>
  //         <p>Now let us go back to the Employees Example</p>
  //         <p>
  //           list page and update page are normal routing where detail page is a
  //           nested routing for list page
  //         </p>
  //         <p>
  //           So, we have to declare the routes for list page and update page in
  //           the same parent page like "App.js" and the route for details page
  //           has to be declared in the list page
  //         </p>
  //         <p>
  //           we have to use exact keyword for detail page because the parent
  //           i.e., list page also have similar start keyword for url path i.e.,
  //           "employeeslist" and "employeeslist/employee/:id" so we have to use
  //           exact key word for detail page route when declared, or else
  //           navigation won't happen to this page
  //         </p>
  //         <p>
  //           we have to declare update page route before list page because the
  //           route paths are "employeeslist/updateemployee/:id" and
  //           "employeeslist", as the paths are similar the navigation always
  //           takes to the list page because, the path parts match, so to overcome
  //           this problem declare update page route before the list page
  //         </p>
  //         <p>
  //           use exact keyword for update page to avoid coincidence with the
  //           details page
  //         </p>
  //         {/* <p></p> */}
  //       </center>
  //     </div>
  //   );
  //   return uiComponent;
  // }
}
