"use client";
import ProductPageComponent from "../../../../components/product-page/product-page";
import usePathnameArray from "../../../../client/hooks/use-pathname-array";
import { useGetProductsQuery } from "../../../../redux/api/shop/shop.api";

const ProductPage = () => {
  const pathnameArray = usePathnameArray();
  const { data, error, isFetching } = useGetProductsQuery();
  if (error) return <div>Error</div>;
  if (isFetching) return <div>Loading</div>;

  const product = data.find((item) => item.id === +pathnameArray[3]);
  return <ProductPageComponent product={product} />;
};

export default ProductPage;
