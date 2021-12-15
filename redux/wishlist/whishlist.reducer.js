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

const INIT_STATE = {
  title: "whishlist",
  products: [],
  path: "user",
};

const wishlistReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_WISHLIST_ITEM:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case REMOVE_WISHLIST_ITEM:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case CLEAR_WISHLIST:
      return INIT_STATE;
    default:
      return state;
  }
};

export default wishlistReducer;
