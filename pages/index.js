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

// export async function getStaticProps(context) {
//   try {
//     const categoryNamesList = await axios.get(
//       "https://fakestoreapi.com/products/categories"
//     );
//     let categories = [];
//     for (const category of categoryNamesList.data) {
//       const categoryObject = await createCategoryObject(category);
//       categories.push(categoryObject);
//     }
//     console.log(categories);
//     return {
//       props: {
//         categories,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       props: {
//         error: "failed to fetch categories",
//       },
//     };
//   }
// }
