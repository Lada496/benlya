import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Shop from "../components/landing-page/shop";

import { fetchCategoriesAsync } from "../redux/categories/categories.actions";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <>
      <Shop />
    </>
  );
};

export default LandingPage;
