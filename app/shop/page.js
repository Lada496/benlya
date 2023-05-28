"use client";
import Link from "next/link";

import ShopList from "../../components/shop-page/shop-list";
import Message from "../../components/ui/message";
import { useGetCategoriesQuery } from "../../redux/api/shop/shop.api";

const ShopPage = () => {
  const { data, error, isLoading } = useGetCategoriesQuery();
  if (isLoading) {
    return <Message text="Loading..." />;
  }
  if (error) {
    return <Message text="Failed to fatch shop data" />;
  }

  if (data.length === 0) {
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

  return (
    <>
      <h1 className="h1">Preview</h1>
      {data.map((category) => (
        <ShopList key={category.id} category={category} />
      ))}
    </>
  );
};

export default ShopPage;
