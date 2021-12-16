import { useSelector } from "react-redux";

import Link from "next/link";
import Head from "next/head";
import { withRouter } from "next/router";
import ProductsList from "../../../components/products-list/products-list";

const CategoryPage = ({ router }) => {
  const categories = useSelector((state) => state.categories);

  if (categories.isFetching) {
    return <Message text="Loading..." />;
  }
  if (categories.errorMessage) {
    return <Message text="Failed to fetch data" />;
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

  const categoryObject = list.filter(
    (category) => category.path === router.query.category
  )[0];
  return (
    <>
      <Head>
        <title>Shop by Category</title>
        <meta name="description" content="Products list by each category" />
      </Head>
      <ProductsList categoryObject={categoryObject} />
    </>
  );
};

export default withRouter(CategoryPage);
