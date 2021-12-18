import Link from "next/link";
import Head from "next/head";
import { useSelector } from "react-redux";

import ShopList from "../../components/shop-page/shop-list";
import Message from "../../components/ui/message";

const ShopPage = () => {
  const categories = useSelector((state) => state.categories);
  // if (!categories || categories.categories.length === 0) {
  //   return (
  //     <Link href="/">
  //       <a style={{ textAlign: "center", display: "block" }}>Back to Home</a>
  //     </Link>
  //   );
  // }
  if (categories.isFetching) {
    return <Message text="Loading..." />;
  }
  if (categories.errorMessage) {
    return <Message text="Failed to fatch shop data" />;
  }

  if (categories.categories.length === 0) {
    // router.push("/");
    return (
      <>
        <p style={{ textAlign: "center", margin: "2rem" }}>
          Data fetch failed.
          <Link href="/">
            <a style={{ textAlign: "center" }}> Back to Home</a>
          </Link>
        </p>
      </>
    );
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
