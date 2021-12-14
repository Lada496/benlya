import React from "react";
import { withRouter } from "next/router";

const ProductPageComponent = ({ router }) => {
  console.log(router);
  return <h1>{router.query.productId}</h1>;
};

export default withRouter(ProductPageComponent);
