import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart.util";

const initialState = {
  cartItems: [],
  hidden: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    removeCartItemOne(state, action) {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
    removeCartItemAll(state, action) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
    resetCart() {
      return initialState;
    },
  },
});

export const { addCartItem, removeCartItemOne, removeCartItemAll, resetCart } =
  cartSlice.actions;
export default cartSlice.reducer;
