import React from "react";
import ProductItem from "./product-item";

const ProductsList = ({ categoryObject }) => {
  console.log(categoryObject);
  if (!categoryObject) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{categoryObject.category}</h1>
      {categoryObject.products.length >= 1 &&
        categoryObject.products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      {categoryObject.products.length === 0 && <p>No item added yet!</p>}
    </>
  );
};

export default ProductsList;
