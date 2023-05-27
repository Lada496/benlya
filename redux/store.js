import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { wishlistApi } from "./api/wishlist/wishlist.api";
import { shopApi } from "./api/shop/shop.api";
import cartReducer from "./slice/cart/cart.slice";
// import { cartApi } from "../redux/api/cart/cart.api";

export const store = configureStore({
  reducer: {
    [wishlistApi.reducerPath]: wishlistApi.reducer,
    // [cartApi.reducerPath]: cartApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wishlistApi.middleware, shopApi.middleware),
});

setupListeners(store.dispatch);
