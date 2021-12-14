import { combineReducers } from "redux";

import cartReducer from "./cart/cart.reducer";
import categoriesReducer from "./categories/categories.reducer";
import wishlistReducer from "./wishlist/whishlist.reducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  wishlist: wishlistReducer,
});
