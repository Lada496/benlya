import Head from "next/head";
import { withRouter } from "next/router";
import axios from "axios";
import ProductPageComponent from "../../../components/product-page/product-page";
import { pathFinder } from "../../../lib/categories-utils";

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
