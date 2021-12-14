import axios from "axios";
import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from "./category.types";

import { createCategoryObject } from "./categories.util";

export const fetchCategoriesStart = () => ({
  type: FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categoriesList) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categoriesList,
});

export const fetchCategoriesFailure = (errorMessage) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: errorMessage,
});

export const fetchCategoriesAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchDirectoryStart());
      const categoryNamesList = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      const categories = categoryNamesList.map((categoryName) =>
        createCategoryObject(categoryName)
      );
      dispatch(fetchCategoriesSuccess(categories));
    } catch (error) {
      console.log(error);
      dispatch(fetchDirectoryFailure("Failed to fatch categories"));
    }
  };
};
