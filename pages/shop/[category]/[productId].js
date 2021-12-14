import Head from "next/head";
import { withRouter } from "next/router";
import axios from "axios";
import ProductPageComponent from "../../../components/product-page/product-page";
import { pathFinder } from "../../../lib/categories-utils";

const DUMMY = [
  { id: 1, title: "product1" },
  { id: 2, title: "product2" },
  { id: 3, title: "product3" },
  { id: 4, title: "product4" },
  { id: 5, title: "product5" },

  { id: 6, title: "product6" },
  { id: 7, title: "product7" },
  { id: 8, title: "product8" },
  { id: 9, title: "product9" },
  { id: 10, title: "product10" },

  { id: 11, title: "product11" },
  { id: 12, title: "product12" },
  { id: 13, title: "product13" },

  { id: 14, title: "product14" },
  { id: 15, title: "product15" },
  { id: 16, title: "product16" },
];

const ProductPage = ({ router, products }) => {
  // axios.get("https://fakestoreapi.com/products").then((data) => {
  //   console.log(data);
  // });
  console.log(products);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  console.log("product", router);
  const product = products.find((item) => item.id === +router.query.productId);
  console.log(product);
  return (
    <>
      <Head>
        <title>Product Page</title>
        <meta name="description" content="Products detail page" />
      </Head>
      <ProductPageComponent product={product} />
    </>
  );
};

export default withRouter(ProductPage);

export async function getStaticPaths() {
  const products = await axios.get("https://fakestoreapi.com/products");
  const productIdParams = products.data.map((product) => ({
    params: {
      productId: product.id.toString(),
      category: pathFinder(product.category),
    },
  }));

  return {
    fallback: true,
    paths: productIdParams,
  };
}

export async function getStaticProps(context) {
  try {
    const products = await axios.get("https://fakestoreapi.com/products");
    return {
      props: {
        products: products.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
