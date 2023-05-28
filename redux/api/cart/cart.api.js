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
        return {
          cartItems: response.cart,
          refetch: false,
        };
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
            draft = {
              ...draft,
              cartItems: [],
            };
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
            const updatedCartItems = addItemToCart(
              draft.cartItems,
              cartItemToAdd
            );
            return {
              ...draft,
              cartItems: updatedCartItems,
            };
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
              draft.cartItems,
              cartItemToRemove
            );
            return {
              ...draft,
              cartItems: updatedCartItems,
            };
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
            const updatedCartItems = draft.cartItems.filter(
              (item) => item.id !== cartItemToRemove.id
            );
            return {
              ...draft,
              cartItems: updatedCartItems,
            };
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

export const startRefechCartItems = () =>
  cartApi.util.updateQueryData("getCartItems", undefined, (draft) => ({
    ...draft,
    refetch: true,
  }));

export const refetchCartItemsCompleted = () =>
  cartApi.util.updateQueryData("getCartItems", undefined, (draft) => ({
    ...draft,
    refetch: false,
  }));

export const {
  useGetCartItemsQuery,
  useResetCartMutation,
  useAddCartItemMutation,
  useRemoveCartItemOneMutation,
  useRemoveCartItemsAllMutation,
} = cartApi;
