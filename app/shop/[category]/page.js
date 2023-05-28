"use client";
import Link from "next/link";
import { useGetCategoriesQuery } from "../../../redux/api/shop/shop.api";
import ProductsList from "../../../components/products-list/products-list";
import usePathnameArray from "../../../client/hooks/use-pathname-array";
import Message from "../../../components/ui/message";

const CategoryPage = () => {
  const { data: categories, error, isFetching } = useGetCategoriesQuery();
  const pathnameArray = usePathnameArray();

  if (isFetching) {
    return <Message text="Loading..." />;
  }
  if (error) {
    return <Message text="Failed to fetch data" />;
  }

  if (categories.length === 0) {
    return (
      <>
        <p style={{ textAlign: "center", margin: "2rem" }}>
          Data fetch failed.
          <Link href="/" style={{ textAlign: "center" }}>
            Back to Home
          </Link>
        </p>
      </>
    );
  }

  const categoryObject = categories.filter(
    (category) => category.path === pathnameArray[2]
  )[0];
  return <ProductsList categoryObject={categoryObject} />;
};

export default CategoryPage;
