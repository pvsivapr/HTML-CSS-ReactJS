import { INCREMENT, DECREMENT, RESET } from "../actions/CounterActions"

const initialState = {
    count: 0
}

function Counting(state = initialState, action) {
    console.log("Reducer", state, action)
    switch (action.Type) 
    {
        case INCREMENT:
            console.log(INCREMENT);
            return
            {
                // count: state.count+1
            };
            break;
        case DECREMENT:
            console.log(DECREMENT);
            return
            {
                // count: state.count-1
            };
            break;
        case RESET:
            console.log(RESET);
            return
            {
                // count: 0
            };
            break;
        default:
            return state;
            break;
    }
}

export default Counting;