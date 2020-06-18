import React from "react"

class Counter extends React.Component
{

    decrement = ()=>
    {
        
    }

    reset = ()=>
    {
        
    }

    increment = () => 
    {

    }

    render()
    {
        const uiComponent = (
            <div>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.decrement}>Decrement</button>
                <p></p>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
        return uiComponent;
    }
}
export default Counter;