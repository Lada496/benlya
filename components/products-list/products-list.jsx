import React from "react";
import RowContainer from "../ui/row-container";
import ProductItem from "./product-item";

const ProductsList = ({ categoryObject }) => {
  console.log("pruducts list", categoryObject);
  if (!categoryObject.products) {
    return (
      <>
        <h1>{categoryObject.title}</h1>
        <p>No items added yet!</p>
      </>
    );
  }

  return (
    <>
      <h1>{categoryObject.title}</h1>
      <RowContainer>
        {categoryObject.products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
        {categoryObject.products.length === 0 && <p>No item added yet!</p>}
      </RowContainer>
    </>
  );
};

export default ProductsList;
