import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { wishlistApi } from "./api/wishlist/wishlist.api";
import { shopApi } from "./api/shop/shop.api";
import { cartApi } from "../redux/api/cart/cart.api";

export const store = configureStore({
  reducer: {
    [wishlistApi.reducerPath]: wishlistApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      wishlistApi.middleware,
      shopApi.middleware,
      cartApi.middleware
    ),
});

setupListeners(store.dispatch);
