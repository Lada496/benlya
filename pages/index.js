import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Shop from "../components/landing-page/shop";

import { fetchCategoriesAsync } from "../redux/categories/categories.actions";
import { fetchWishlistAsync } from "../redux/wishlist/whishlist.actions";

const LandingPage = () => {
  const categories = useSelector((state) => state.categories);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      (!categories.isFetching && categories.categories.length === 0) ||
      categories.errorMessage
    ) {
      dispatch(fetchCategoriesAsync());
    }
  }, [categories]);
  useEffect(() => {
    if (!wishlist.isFetching && !wishlist.isFetched) {
      dispatch(fetchWishlistAsync());
    }
  }, [wishlist]);

  return (
    <>
      <Shop />
    </>
  );
};

export default LandingPage;
