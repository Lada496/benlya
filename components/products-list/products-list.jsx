import React from "react";
import Message from "../ui/message";
import RowContainer from "../ui/row-container";
import ProductItem from "./product-item";

const ProductsList = ({ categoryObject }) => {
  return (
    <>
      <h1>{categoryObject.title}</h1>
      {categoryObject.products.length === 0 && (
        <Message text="No items added yet!" />
      )}
      <RowContainer>
        {categoryObject.products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </RowContainer>
    </>
  );
};

export default ProductsList;
