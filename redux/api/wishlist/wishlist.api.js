import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const wishlistApi = createApi({
  reducerPath: "wishlistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),

  endpoints: (builder) => ({
    getWishlist: builder.query({
      query: () => "wishlist",
      transformResponse: (response) => {
        return {
          title: "wishlist",
          products: response.wishlist,
          path: "user",
        };
      },
    }),
    resetWishlist: builder.mutation({
      query: () => ({
        url: "wishlist",
        method: "DELETE",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          wishlistApi.util.updateQueryData(
            "getWishlist",
            undefined,
            (draft) => {
              draft.products = [];
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    addWishlistItem: builder.mutation({
      query: ({ wishlist }) => ({
        url: "wishlist/add",
        method: "PATCH",
        body: wishlist,
      }),
      async onQueryStarted({ wishlist }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          wishlistApi.util.updateQueryData(
            "getWishlist",
            undefined,
            (draft) => {
              draft.products = [...draft.products, wishlist];
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    deleteWishlistItem: builder.mutation({
      query: ({ productId }) => {
        return {
          url: `wishlist/delete/${productId}`,
          method: "DELETE",
          body: productId,
        };
      },
      async onQueryStarted({ productId }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          wishlistApi.util.updateQueryData(
            "getWishlist",
            undefined,
            (draft) => {
              draft.products = draft.products.filter(
                (item) => item.id !== productId
              );
            }
          )
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
  useGetWishlistQuery,
  useAddWishlistItemMutation,
  useDeleteWishlistItemMutation,
  useResetWishlistMutation,
} = wishlistApi;
