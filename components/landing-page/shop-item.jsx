import Link from "next/link";
import { Grid } from "semantic-ui-react";
import { ShopItemContainer, LinkContainer } from "./shop-item.styles";
const ShopItem = ({ item }) => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <ShopItemContainer imageUrl={item.imageUrl}>
        <Link href={`/shop/${item.path}`}>
          <LinkContainer>{item.title}</LinkContainer>
        </Link>
      </ShopItemContainer>
    </Grid.Column>
  );
};

export default ShopItem;
