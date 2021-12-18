import {
  ADD_WISHLIST_ITEM,
  REMOVE_WISHLIST_ITEM,
  CLEAR_WISHLIST,
  FETCH_WISHLIST_START,
  FETCH_WISHLIST_SUCCESS,
  FETCH_WISHLIST_FAILURE,
  RESET_WISHLIST,
} from "./whishlist.types";

const INIT_STATE = {
  title: "wishlist",
  products: [],
  path: "user",
  isFetching: false,
  errorMessage: null,
  isFetched: false,
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
    case FETCH_WISHLIST_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_WISHLIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        products: action.payload,
      };
    case FETCH_WISHLIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    case RESET_WISHLIST:
      return INIT_STATE;
    default:
      return state;
  }
};

export default wishlistReducer;
