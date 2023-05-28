import { Grid } from "semantic-ui-react";
import { ShopItemContainer, LinkContainer } from "./shop-item.styles";
const ShopItem = ({ item }) => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <ShopItemContainer imageUrl={item.imageUrl}>
        <LinkContainer href={`/shop/${item.path}`}>{item.title}</LinkContainer>
      </ShopItemContainer>
    </Grid.Column>
  );
};

export default ShopItem;
