import ProductItem from "../products-list/product-item";
import { Grid } from "semantic-ui-react";
import { CardContainer } from "../products-list/products-list.styles";
import { LinkContainer } from "./shop-list.styles";

const ShopList = ({ category }) => {
  const filteredList =
    category.products.length <= 4
      ? category.products
      : category.products.slice(0, 4);
  return (
    <>
      <h2 className="h2">{category.title}</h2>
      <CardContainer>
        <Grid>
          {filteredList.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </Grid>
      </CardContainer>
      <LinkContainer href={`/shop/${category.path}`}>view more</LinkContainer>
    </>
  );
};

export default ShopList;
