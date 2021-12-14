import { useSelector } from "react-redux";
import axios from "axios";
import Shop from "../components/landing-page/shop";

import { createCategoryObject } from "../lib/categories-utils";

const LandingPage = ({ categories, error }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  console.log(categories);
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <Shop list={categories} />
    </>
  );
};

export default LandingPage;

export async function getStaticProps(context) {
  try {
    const categoryNamesList = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );

    // const categories = categoryNamesList.data.map(
    //   async (categoryName) => await createCategoryObject(categoryName)
    // );
    // console.log(categories);
    let categories = [];
    for (const category of categoryNamesList.data) {
      const categoryObject = await createCategoryObject(category);
      // console.log(categoryObject);
      categories.push(categoryObject);
    }
    console.log(categories);
    return {
      props: {
        categories,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        error: "failed to fetch categories",
      },
    };
  }
}
