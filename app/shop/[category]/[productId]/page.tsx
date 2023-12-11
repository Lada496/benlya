// This file has been sourced from: /beoshare/pages/shop/[category]/[productId].js
import Components from "./components";

async function getStaticPaths() {
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
async function getStaticProps(context) {
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
export default async function Page(props: any) {
  return <Components {...props} />;
}
