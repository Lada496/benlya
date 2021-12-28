import Link from "next/link";
import ProductItem from "../products-list/product-item";
import RowContainer from "../ui/row-container";
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
            //   <ShopItem key={item.id} item={item} />
            <ProductItem key={item.id} item={item} />
          ))}
        </Grid>
      </CardContainer>
      <Link href={`/shop/${category.path}`}>
        <LinkContainer>view more</LinkContainer>
      </Link>
    </>
  );
};

export default ShopList;
