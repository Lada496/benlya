import Head from "next/head";
import { useSelector } from "react-redux";

import ShopList from "../../components/shop/shop-list";

const ShopPage = () => {
  const categories = useSelector((state) => state.categories);
  if (categories.isFetching) {
    return <p>Loading...</p>;
  }
  if (categories.errorMessage) {
    return <p>Failed to fatch shop data</p>;
  }

  const list = categories.categories;
  console.log(list);
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Categories List" />
      </Head>
      <h1>Shop by Category</h1>
      {list.map((category) => (
        <ShopList key={category.id} category={category} />
      ))}
    </>
  );
};

export default ShopPage;
