import { useSelector } from "react-redux";
import Head from "next/head";
import ProductsList from "../../components/products-list/products-list";

const WishListPage = () => {
  const wishlist = useSelector((state) => state.wishlist);
  console.log(wishlist);
  return (
    <>
      <Head>
        <title>Wish List</title>
        <meta name="description" content="User's wish list" />
      </Head>
      <ProductsList categoryObject={wishlist} />
    </>
  );
};

export default WishListPage;
