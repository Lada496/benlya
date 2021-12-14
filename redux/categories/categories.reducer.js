import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from "./category.types";

const INIT_STATE = {
  categories: null,
  isFetching: false,
  errorMessage: undefined,
};

const categoriesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        categories: action.payload,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
  }
};
