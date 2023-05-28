"use client";
import ProductPageComponent from "../../../../components/product-page/product-page";
import usePathnameArray from "../../../../client/hooks/use-pathname-array";
import { useGetProductsQuery } from "../../../../redux/api/shop/shop.api";
import Message from "../../../../components/ui/message";
import Loading from "./loading";

const ProductPage = () => {
  const pathnameArray = usePathnameArray();
  const { data, error, isFetching } = useGetProductsQuery();
  if (error) return <Message text="⚠️ Failed to fetch product data" />;
  if (isFetching) return <Loading />;

  const product = data.find((item) => item.id === +pathnameArray[3]);
  return <ProductPageComponent product={product} />;
};

export default ProductPage;
