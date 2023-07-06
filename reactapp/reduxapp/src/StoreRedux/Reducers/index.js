import { combineReducers } from "redux";
import reducer from "./AmountReducer";

const reducers =combineReducers({
    amount: reducer,
})
export default reducers