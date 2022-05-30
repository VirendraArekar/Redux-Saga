import { combineReducers } from "redux";
import PostReducer from "./reducers/PostReducer";

const RootReducer = combineReducers({ PostReducer });

export default RootReducer;
