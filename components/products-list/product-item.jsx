"use client";
import Link from "next/link";
import { pathFinder } from "../../lib/categories-utils";
import { Grid } from "semantic-ui-react";
import {
  ItemContainer,
  TitleContainer,
  PriceContainer,
} from "./product-item.styles.js";
import Rating from "../ui/rating-container";

const ProductItem = ({ item }) => {
  const categoryPath = pathFinder(item.category);
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <Link href={`/shop/${categoryPath}/${item.id}`}>
        <ItemContainer imageUrl={item.image}></ItemContainer>
      </Link>
      <TitleContainer>{item.title}</TitleContainer>
      <PriceContainer>${item.price}</PriceContainer>
      <Rating rate={item.rating.rate} count={item.rating.count} />
    </Grid.Column>
  );
};

export default ProductItem;
