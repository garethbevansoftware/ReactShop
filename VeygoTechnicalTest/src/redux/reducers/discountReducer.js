import * as types from "../actions/actionTypes";
import initialState from "./initialstate";

export default function discountReducer(
  state = initialState.discounts,
  action
) {
  switch (action.type) {
    case types.APPLY_DISCOUNT:
      var item = state.find((item) => item.id === action.item.id);
      if (!item) {
        return [...state, { ...action.item }];
      }
      return state;
    case types.GET_SHOPPING_CART_ITEMS:
      return state;
    default:
      return state;
  }
}
