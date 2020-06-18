import React from "react"
import { connect } from "react-redux"

import {increment, decrement, reset} from "./../ReduxComoponents/actions/CounterActions.js"

class Counter extends React.Component {
    //state = { count: 0 }

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
// export default Counter;
function mapStateToProps(state)
{
    return{
        count: state.count
    };
}
const mapDispatchToProps = {
    increment,
    decrement,
    reset
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);