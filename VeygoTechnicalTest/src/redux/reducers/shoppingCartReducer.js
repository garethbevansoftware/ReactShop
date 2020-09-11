import * as types from "../actions/actionTypes";
import initialState from "./initialstate";

export default function shoppingCartReducer(
  state = initialState.cartItems,
  action
) {
  switch (action.type) {
    case types.ADD_ITEM_TO_CART:
      var item = state.find((item) => item.id === action.item.id);
      if (item) {
        return state.map((item, index) => {
          if (item.id === action.item.id) {
            return {
              ...item,
              quantity: item.quantity + action.item.quantity,
            };
          }
          return item;
        });
      } else {
        return [...state, { ...action.item }];
      }
    case types.GET_SHOPPING_CART_ITEMS:
      return state;
    case types.GET_ITEM_LIST:
      return action.items;
    case types.REMOVE_ITEM_FROM_CART:
      return state.filter((course) => course.id !== action.course.id);
    default:
      return state;
  }
}
