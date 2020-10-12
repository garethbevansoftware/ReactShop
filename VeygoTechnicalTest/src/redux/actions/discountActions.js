import * as types from "./actionTypes";

export function applyDiscount(item) {
  return { type: types.APPLY_DISCOUNT, item };
}

export function getDiscounts(items) {
  return { type: types.GET_DISCOUNTS, items };
}
