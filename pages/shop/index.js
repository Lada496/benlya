import Head from "next/head";
import { useSelector } from "react-redux";

import ShopList from "../../components/shop-page/shop-list";

const ShopPage = () => {
  const categories = useSelector((state) => state.categories);
  if (!categories) {
    router.push("/");
  }
  if (categories.isFetching) {
    return <Message text="Loading..." />;
  }
  if (categories.errorMessage) {
    return <Message text="Failed to fatch shop data" />;
  }

  const list = categories.categories;
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Categories List" />
      </Head>
      <h1>Preview</h1>
      {list.map((category) => (
        <ShopList key={category.id} category={category} />
      ))}
    </>
  );
};

export default ShopPage;
