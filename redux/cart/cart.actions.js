import {
  ADD_CART_ITEM,
  CLEAR_FROM_CART,
  REMOVE_CART_ITEM,
  RESET_CART,
} from "./cart.types";

export const addItemToCartAction = (item) => ({
  type: ADD_CART_ITEM,
  payload: item,
});

export const removeItemFromCartAction = (item) => ({
  type: REMOVE_CART_ITEM,
  payload: item,
});

export const clearItemFromCartAction = (item) => ({
  type: CLEAR_FROM_CART,
  payload: item,
});

export const resetCart = () => ({
  type: RESET_CART,
});
