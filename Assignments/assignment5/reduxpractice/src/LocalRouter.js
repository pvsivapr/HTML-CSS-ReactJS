import React from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Counter from "./Components/CounterComponent.js";

export default function LocalRouter()
{
    const routerComponent = (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/assignment6" component={Counter}></Route>
            <Route exact path="/assignment7" component={Home}></Route>
        </Switch>
    )
    return routerComponent;
}