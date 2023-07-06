
import { createStore } from "redux";
import counterReducer from "./Reducer";

const store = createStore(counterReducer)

export default store