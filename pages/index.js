import { useSelector, useDispatch, connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import Shop from "../components/landing-page/shop";
import { fetchCategoriesAsync } from "../redux/categories/categories.actions";
import { wrapper } from "../redux/store";

import { createCategoryObject } from "../lib/categories-utils";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

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

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(fetchCategoriesAsync());
});

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };
