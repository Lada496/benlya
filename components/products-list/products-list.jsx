import Message from "../ui/message";
import ProductItem from "./product-item";
import { Grid } from "semantic-ui-react";
import { CardContainer } from "./products-list.styles";

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
      <CardContainer>
        <Grid>
          {categoryObject.products.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </Grid>
      </CardContainer>
    </>
  );
};

export default ProductsList;
