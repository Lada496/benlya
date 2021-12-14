import Head from "next/head";
import ProductsList from "../../components/products-list/products-list";

const DUMMY = {
  category: "wishlist",
  routePath: "wish-list",
  products: [
    { id: 1, title: "product1" },
    { id: 2, title: "product2" },
    { id: 3, title: "product3" },
    { id: 4, title: "product4" },
    { id: 5, title: "product5" },
  ],
};

const WishList = () => {
  return (
    <>
      <Head>
        <title>Wish List</title>
        <meta name="description" content="User's wish list" />
      </Head>
      <ProductsList categoryObject={DUMMY} />
    </>
  );
};

export default WishList;
