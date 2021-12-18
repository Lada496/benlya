import axios from "axios";

import {
  ADD_WISHLIST_ITEM,
  REMOVE_WISHLIST_ITEM,
  CLEAR_WISHLIST,
  FETCH_WISHLIST_START,
  FETCH_WISHLIST_SUCCESS,
  FETCH_WISHLIST_FAILURE,
  RESET_WISHLIST,
} from "./whishlist.types";

export const addItemToWishlistAction = (item) => ({
  type: ADD_WISHLIST_ITEM,
  payload: item,
});

export const removeItemfromWishlistAction = (item) => ({
  type: REMOVE_WISHLIST_ITEM,
  payload: item,
});

export const clearItemFromWishlistAction = (item) => ({
  type: CLEAR_WISHLIST,
  payload: item,
});

export const fetchWishlistStart = () => ({
  type: FETCH_WISHLIST_START,
});

export const fetchWishlistSuccess = (whislist) => ({
  type: FETCH_WISHLIST_SUCCESS,
  payload: whislist,
});

export const fetchWishlistFailure = (errorMessage) => ({
  type: FETCH_WISHLIST_FAILURE,
  payload: errorMessage,
});

export const resetWishlist = () => ({
  type: RESET_WISHLIST,
});

export const fetchWishlistAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchWishlistStart());
      const wishlistObject = await axios.get("/api/whishlist");
      dispatch(fetchWishlistSuccess(wishlistObject.data.wishlist));
    } catch (error) {
      dispatch(fetchWishlistFailure("Failed to fetch wishlist "));
    }
  };
};
