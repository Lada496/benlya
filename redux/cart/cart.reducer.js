import {
  ADD_CART_ITEM,
  CLEAR_FROM_CART,
  REMOVE_CART_ITEM,
  RESET_CART,
} from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.util";

//initial state
const INIT_STATE = {
  cartItems: [],
  hidden: true,
};

//reducer function
const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CLEAR_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case RESET_CART:
      return INIT_STATE;
    default:
      return state;
  }
};

export default cartReducer;
