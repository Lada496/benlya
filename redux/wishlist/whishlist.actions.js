import {
  ADD_WISHLIST_ITEM,
  REMOVE_WISHLIST_ITEM,
  CLEAR_WISHLIST,
  FETCH_WISHLIST_START,
  FETCH_WISHLIST_SUCCESS,
  FETCH_WISHLIST_FAILURE,
  UPDATE_WISHLIST_START,
  UPDATE_WISHLIST_SUCCESS,
  UPDATE_WISHLIST_FAILURE,
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

// export const updateWishistStart = () => ({
//   type: UPDATE_WISHLIST_START,
// });

// export const updateWishlistSuccess = (wishlist) => ({
//   type: UPDATE_WISHLIST_SUCCESS,
//   payload:wishlist
// });
