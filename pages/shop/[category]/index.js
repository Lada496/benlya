import Head from "next/head";
import { withRouter } from "next/router";
import axios from "axios";
import { pathFinder } from "../../../lib/categories-utils";
import ProductsList from "../../../components/products-list/products-list";

const DUMMY = [
  {
    category: "women's clothing",
    routePath: "womens-clothing",
    products: [
      { id: 1, title: "product1" },
      { id: 2, title: "product2" },
      { id: 3, title: "product3" },
      { id: 4, title: "product4" },
      { id: 5, title: "product5" },
    ],
  },
  {
    category: "men's clothing",
    routePath: "mens-clothing",
    products: [
      { id: 6, title: "product6" },
      { id: 7, title: "product7" },
      { id: 8, title: "product8" },
      { id: 9, title: "product9" },
      { id: 10, title: "product10" },
    ],
  },
  {
    category: "jewelery",
    routePath: "jewelery",
    products: [
      { id: 11, title: "product11" },
      { id: 12, title: "product12" },
      { id: 13, title: "product13" },
    ],
  },
  {
    category: "electronics",
    routePath: "electronics",
    products: [
      { id: 14, title: "product14" },
      { id: 15, title: "product15" },
      { id: 16, title: "product16" },
    ],
  },
];

const CategoryPage = ({ router, error, categories }) => {
  const categoryObject = DUMMY.filter(
    (category) => category.routePath === router.query.category
  )[0];
  return (
    <>
      <Head>
        <title>Shop by Category</title>
        <meta name="description" content="Products list by each category" />
      </Head>
      {/* <CategoryPageComponent /> */}
      <ProductsList categoryObject={categoryObject} />
    </>
  );
};

export default withRouter(CategoryPage);

export async function getStaticPaths() {
  const categories = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return {
    fallback: "blocking",
    paths: categories.data.map((category) => ({
      params: { category: pathFinder(category) },
    })),
  };
}

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
