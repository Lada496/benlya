"use client";
// This file has been sourced from: /beoshare/pages/index.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/client";
import Shop from "../components/landing-page/shop";

import { fetchCategoriesAsync } from "../redux/categories/categories.actions";
import { fetchWishlistAsync } from "../redux/wishlist/whishlist.actions";

const LandingPage = () => {
  const categories = useSelector((state) => state.categories);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const session = useSession();
  useEffect(() => {
    if (
      (!categories.isFetching && categories.categories.length === 0) ||
      categories.errorMessage
    ) {
      dispatch(fetchCategoriesAsync());
    }
  }, [categories]);

  useEffect(() => {
    if (session[0] && !wishlist.isFetching && !wishlist.isFetched) {
      dispatch(fetchWishlistAsync());
    }
  }, [wishlist, session]);

  return (
    <>
      <Shop />
    </>
  );
};

export default LandingPage;
