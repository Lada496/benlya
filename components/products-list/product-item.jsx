import { withRouter } from "next/router";
import Link from "next/link";
import { pathFinder } from "../../lib/categories-utils";
import { Grid, Rating } from "semantic-ui-react";
import {
  ItemContainer,
  TitleContainer,
  PriceContainer,
  RatingContainer,
} from "./product-item.styles.js";

const ProductItem = ({ item }) => {
  const categoryPath = pathFinder(item.category);
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <Link href={`/shop/${categoryPath}/${item.id}`}>
        <ItemContainer imageUrl={item.image}></ItemContainer>
      </Link>
      <TitleContainer>{item.title}</TitleContainer>
      <PriceContainer>${item.price}</PriceContainer>
      <RatingContainer>
        <Rating defaultRating={item.rating.rate} maxRating={5} />
        <p>({item.rating.count})</p>
      </RatingContainer>
    </Grid.Column>
  );
};

export default withRouter(ProductItem);
