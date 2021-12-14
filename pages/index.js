import axios from "axios";
import Shop from "../components/landing-page/shop";

import { createCategoryObject } from "../utils/categories-creator";
const DUMMY = [
  { name: "women's clothing", path: "/womens-clothing" },
  { name: "maleClothing", path: "/mens-clothing" },
  { name: "jewelery", path: "/jewelery" },
  { name: "electronics", path: "/electronics" },
];

const LandingPage = ({ categories, error }) => {
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
