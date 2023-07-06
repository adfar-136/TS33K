import { applyMiddleware, createStore } from "redux";
import reducers from "./Reducers";
import thunk from "redux-thunk";

const storee = createStore(reducers,applyMiddleware(thunk))
export default storee