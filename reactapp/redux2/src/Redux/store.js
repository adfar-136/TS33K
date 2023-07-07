import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const reducer = combineReducers({
    counter : counterReducer,
    todos : todoReducer,
})
const store = createStore(reducer)
export default store