import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { addItemToCart, removeItemFromCart } from "./cart.util";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getCartItems: builder.query({
      query: () => "cart",
      transformResponse: (response) => {
        return response.cart;
      },
    }),
    resetCart: builder.mutation({
      query: () => ({
        url: "cart",
        method: "DELETE",
        body: {},
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          cartApi.util.updateQueryData("getCartItems", undefined, (draft) => {
            draft = [];
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    addCartItem: builder.mutation({
      query: ({ cartItemToAdd }) => ({
        url: "cart/add",
        method: "PATCH",
        body: cartItemToAdd,
      }),
      async onQueryStarted({ cartItemToAdd }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          cartApi.util.updateQueryData("getCartItems", undefined, (draft) => {
            const updatedCartItems = addItemToCart(draft, cartItemToAdd);
            return (draft = updatedCartItems);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    removeCartItemOne: builder.mutation({
      query: ({ cartItemToRemove }) => ({
        url: `cart/remove/${cartItemToRemove.id}/one`,
        method: "POST",
        body: cartItemToRemove,
      }),
      async onQueryStarted({ cartItemToRemove }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          cartApi.util.updateQueryData("getCartItems", undefined, (draft) => {
            const updatedCartItems = removeItemFromCart(
              draft,
              cartItemToRemove
            );
            return (draft = updatedCartItems);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    removeCartItemsAll: builder.mutation({
      query: ({ cartItemToRemove }) => ({
        url: `cart/remove/${cartItemToRemove.id}/all`,
        method: "POST",
        body: cartItemToRemove,
      }),
      async onQueryStarted({ cartItemToRemove }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          cartApi.util.updateQueryData("getCartItems", undefined, (draft) => {
            return (draft = draft.filter(
              (item) => item.id !== cartItemToRemove.id
            ));
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
  keepUnusedDataFor: 60 * 60 * 1000, // Cache unused data for 1 hour
});

export const {
  useGetCartItemsQuery,
  useResetCartMutation,
  useAddCartItemMutation,
  useRemoveCartItemOneMutation,
  useRemoveCartItemsAllMutation,
} = cartApi;
