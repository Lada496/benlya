import { withRouter } from "next/router";
import ProductPageComponent from "../../components/product-page/product-page";
const DUMMY = [
  { id: 1, title: "product1" },
  { id: 2, title: "product2" },
  { id: 3, title: "product3" },
  { id: 4, title: "product4" },
  { id: 5, title: "product5" },
];

const WishListProductPage = ({ router }) => {
  const product = DUMMY.find(
    (product) => product.id === +router.query["wish-list-productId"]
  );
  console.log(router);
  console.log(product);
  return (
    <>
      <ProductPageComponent product={product} />
    </>
  );
};

export default withRouter(WishListProductPage);
