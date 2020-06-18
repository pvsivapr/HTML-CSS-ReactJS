import React from "react"
import { connect } from "react-redux"

import {increment, decrement, reset} from "../actions/CounterActions.js"

class Counter extends React.Component {

    counterIncrement = () => {
        this.props.increment();
    }

    counterDecrement = () => {
        this.props.decrement();
    }

    counterReset = () => {
        this.props.reset();
    }

    render() {
        const uiComponent = (
            <div>
                <button onClick={this.counterReset}>Reset</button>
                <button onClick={this.counterDecrement}>Decrement</button>
                <p>{this.props.count}</p>
                <button onClick={this.counterIncrement}>Increment</button>
            </div>
        )
        return uiComponent;
    }
}
function mapStateToProps(state)
{
    return{
        count: state.Counting.count
    };
}
const mapDispatchToProps = {
    increment,
    decrement,
    reset
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);