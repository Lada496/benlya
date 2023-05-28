import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createCategoryObject } from "./shop.util";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),

  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "products/categories",
      transformResponse: async (response) => {
        let categories = [];
        for (const category of response) {
          const categoryObject = await createCategoryObject(category);
          categories.push(categoryObject);
        }
        return categories;
      },
    }),
    getProducts: builder.query({
      query: () => "products",
    }),
  }),
  keepUnusedDataFor: 60 * 60 * 1000, // Cache unused data for 1 hour
});

export const { useGetProductsQuery, useGetCategoriesQuery } = shopApi;
