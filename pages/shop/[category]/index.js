import { useSelector } from "react-redux";
import Head from "next/head";
import { withRouter } from "next/router";
import ProductsList from "../../../components/products-list/products-list";

const CategoryPage = ({ router }) => {
  const categories = useSelector((state) => state.categories);
  console.log(categories);
  if (categories.isFetching) {
    return <p>Loading...</p>;
  }
  if (categories.errorMessage) {
    return <p>Failed to fetch data</p>;
  }
  const list = categories.categories;
  if (list.length === 0) {
    router.push("/");
  }
  console.log(list);
  const categoryObject = list.filter(
    (category) => category.path === router.query.category
  )[0];
  return (
    <>
      <Head>
        <title>Shop by Category</title>
        <meta name="description" content="Products list by each category" />
      </Head>
      <ProductsList categoryObject={categoryObject} />
    </>
  );
};

export default withRouter(CategoryPage);

// export async function getStaticPaths() {
//   const categories = await axios.get(
//     "https://fakestoreapi.com/products/categories"
//   );
//   return {
//     fallback: "blocking",
//     paths: categories.data.map((category) => ({
//       params: { category: pathFinder(category) },
//     })),
//   };
// }

// export async function getStaticProps(context) {
//   try {
//     const categoryNamesList = await axios.get(
//       "https://fakestoreapi.com/products/categories"
//     );

//     // const categories = categoryNamesList.data.map(
//     //   async (categoryName) => await createCategoryObject(categoryName)
//     // );
//     // console.log(categories);
//     let categories = [];
//     for (const category of categoryNamesList.data) {
//       const categoryObject = await createCategoryObject(category);
//       // console.log(categoryObject);
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
