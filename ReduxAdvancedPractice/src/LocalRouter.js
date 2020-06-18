import React from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Counter from "./Assignment6/Components/CounterComponent.js";
import UsersList from "./Assignment6/Components/UsersList.js";
import UserDetails from "./Assignment6/Components/UserDetail.js";

export default function LocalRouter()
{
    const routerComponent = (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/assignment6" component={Counter}></Route>
            <Route path="/usersList" component={UsersList}></Route>
            <Route path="/User/:id" component={UserDetails}></Route>
        </Switch>
    )
    return routerComponent;
}