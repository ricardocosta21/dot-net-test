import apiReducer from "./apiReducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    api: apiReducer
});

export default rootReducer;