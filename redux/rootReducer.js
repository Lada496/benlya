import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import categoriesReducer from "./categories/categories.reducer";
import wishlistReducer from "./wishlist/whishlist.reducer";

// const persistConfig = {
//   key: "e-shop",
//   storage,
//   witelist: ["cart", "categories", "whishlist"],
// };
export const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  wishlist: wishlistReducer,
});

// export default persistReducer(persistConfig, rootReducer);
