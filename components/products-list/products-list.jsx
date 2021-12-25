import Message from "../ui/message";
import RowContainer from "../ui/row-container";
import ProductItem from "./product-item";

const ProductsList = ({ categoryObject }) => {
  if (!categoryObject) {
    return <Message text="Please go back to home" />;
  }
  if (categoryObject.title === "wishlist" && categoryObject.isFetching) {
    return <Message text="Loading..." />;
  }
  return (
    <>
      <h1 className="h1">{categoryObject.title}</h1>
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
