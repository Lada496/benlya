import { useSelector } from "react-redux";
import ShopItem from "./shop-item";
import { Grid } from "semantic-ui-react";
import Message from "../ui/message";
import Advertisement from "./advertisement";
import { ShopContainer } from "./shop.styles";

const Shop = () => {
  const categories = useSelector((state) => state.categories);

  if (categories.isFetching) {
    return <Message text="Loading..." />;
  }
  if (categories.errorMessage) {
    return <Message text="Shop data fetch failed" />;
  }
  const list = categories.categories;
  return (
    <>
      <Advertisement />
      <div>
        <h1 className="h1">Categories</h1>
        <ShopContainer>
          <Grid>
            {list.map((category) => (
              <ShopItem key={category.id} item={category} />
            ))}
          </Grid>
        </ShopContainer>
      </div>
    </>
  );
};

export default Shop;
