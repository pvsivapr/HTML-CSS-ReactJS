import postsDispatcher from "./UsersListReducer.js";
import Counting from "./CounterReducer.js";
import userDetailDispatcher from "./UserDetailsReducer.js"

const { combineReducers } = require("redux");

const RootReducer = combineReducers({
    Counting, postsDispatcher, userDetailDispatcher
})

export default RootReducer;