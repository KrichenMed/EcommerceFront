import userReducer from "./userReducer";
import productReducer from "./productReducer";
import amazonProductReducer from "./amazonProductReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  productReducer,
  amazonProductReducer,
});

export default rootReducer;
