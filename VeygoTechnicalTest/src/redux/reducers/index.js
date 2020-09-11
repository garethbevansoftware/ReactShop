import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingCartReducer";

const rootReducer = combineReducers({
  shoppingCartReducer,
});

export default rootReducer;
