"use client";
// This file has been sourced from: /beoshare/pages/shop/[category]/[productId].js
import { withRouter } from "next/router";
import ProductPageComponent from "../../../../components/product-page/product-page";
const ProductPage = ({ router, products }) => {
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const product = products.find((item) => item.id === +router.query.productId);
  return (
    <>
      <ProductPageComponent product={product} />
    </>
  );
};

export default withRouter(ProductPage);
