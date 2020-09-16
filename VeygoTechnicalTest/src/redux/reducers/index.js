import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingCartReducer";
import discountReducer from "./discountReducer";

const rootReducer = combineReducers({
  shoppingCartReducer,
  discountReducer,
});

export default rootReducer;
