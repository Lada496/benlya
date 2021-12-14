import { withRouter } from "next/router";
import ProductPageComponent from "../../../components/product-page/product-page";

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

const ProductPage = ({ router }) => {
  console.log("product", router);
  const product = DUMMY.find((item) => item.id === +router.query.productId);
  console.log(product);
  return (
    <>
      <h1>{product.title}</h1>
      {/* <ProductPageComponent /> */}
    </>
  );
};

export default withRouter(ProductPage);
