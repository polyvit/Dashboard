import { combineReducers } from "redux";
import positionReducer from "./positions/position-reducer";
import filterReducer from "./filters/filters-reducer";

const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});

export default rootReducer;
