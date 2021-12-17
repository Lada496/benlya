import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Shop from "../components/landing-page/shop";

import { fetchCategoriesAsync } from "../redux/categories/categories.actions";

const LandingPage = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      (!categories.isFetching && categories.categories.length === 0) ||
      categories.errorMessage
    ) {
      dispatch(fetchCategoriesAsync());
    }
  }, [categories]);

  return (
    <>
      <Shop />
    </>
  );
};

export default LandingPage;
