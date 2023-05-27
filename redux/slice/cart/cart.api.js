import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { addItemToCart, removeItemFromCart } from "./cart.util";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "api",
  }),
  // refetchOnFocus: true,
  //   extractRehydrationInfo(action, { reducerPath }) {
  //     if (action.type === HYDRATE) {
  //       return action.payload[reducerPath];
  //     }
  //   },
  endpoints: (builder) => ({
    getCartItems: builder.query({
      query: () => "cart",
    }),
    resetCart: builder.mutation({
      query: () => ({
        url: "cart",
        method: "DELETE",
      }),
    }),
    addCartItem: builder.mutation({
      query: ({ cartItemToAdd }) => ({
        url: "cart/add",
        method: "PATCH",
        body: cartItemToAdd,
      }),
      async onQueryStarted({ cartItemToAdd }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData("getCartItems", undefined, (draft) => {
            const updatedCartItems = addItemToCart(draft, cartItemToAdd);
            draft = updatedCartItems;
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
      query: ({ caratItemToRemove }) => ({
        url: `cart/remove/${caratItemToRemove.id}/one`,
        method: "DELETE",
        body: caratItemToRemove,
      }),
      async onQueryStarted({ cartItemToRemove }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch("getCartItems", (draft) => {
          const updatedCartItems = removeItemFromCart(draft, cartItemToRemove);
          draft = updatedCartItems;
        });
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    removeCartItemsAll: builder.mutation({
      query: ({ caratItemToRemove }) => ({
        url: `cart/remove/${caratItemToRemove.id}/all`,
        method: "DELETE",
        body: caratItemToRemove,
      }),
      async onQueryStarted(
        { caratItemToRemove },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch("getCartItem", (draft) => {
          draft = draft.filter((item) => item.id !== caratItemToRemove.id);
        });
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetCartItemsQuery,
  useResetCartMutation,
  useAddCartItemMutation,
  useRemoveCartItemOneMutation,
  useRemoveCartItemsAllMutation,
} = cartApi;

// export const {
//   getCartItems,
//   resetCart,
//   addCartItem,
//   removeCartItemOne,
//   removeCartItemsAll,
// } = cartApi.endpoints;
