import React from "react";
import RowContainer from "../ui/row-container";
import ProductItem from "./product-item";

const ProductsList = ({ categoryObject }) => {
  //   console.log(categoryObject);
  //   if (!categoryObject) {
  //     return <p>Loading...</p>;
  //   }
  console.log(categoryObject);

  return (
    <>
      <h1>{categoryObject.title}</h1>
      <RowContainer>
        {categoryObject.products.length >= 1 &&
          categoryObject.products.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        {categoryObject.products.length === 0 && <p>No item added yet!</p>}
      </RowContainer>
    </>
  );
};

export default ProductsList;
