import * as types from "./actionTypes";

export function addItemToCart(item) {
  return { type: types.ADD_ITEM_TO_CART, item };
}

export function removeItemFromCart(item) {
  return { type: types.REMOVE_ITEM_FROM_CART, item };
}

export function getShoppingCartItems(items) {
  return { type: types.GET_SHOPPING_CART_ITEMS, items };
}

export function clearCart() {
  return { type: types.CLEAR_CART };
}
