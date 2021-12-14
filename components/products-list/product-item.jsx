import { withRouter } from "next/router";
import Link from "next/link";

const ProductItem = ({ item, router }) => {
  console.log("product item", router);
  return (
    <>
      <h1>{item.title}</h1>
      <Link href={`${router.asPath}/${item.id}`}>View Detail</Link>
    </>
  );
};

export default withRouter(ProductItem);
