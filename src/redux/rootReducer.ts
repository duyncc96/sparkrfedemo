import { combineReducers } from "redux";
import authReducer from "./reducers/Auth";

const rootReducer = combineReducers({ auth: authReducer });

export default rootReducer;
