"use client";
import Advertisement from "../components/landing-page/advertisement";
import { useGetCategoriesQuery } from "../redux/api/shop/shop.api";
import { Grid } from "semantic-ui-react";
import Message from "../components/ui/message";
import ShopItem from "../components/landing-page/shop-item";
import { ShopContainer } from "./page.styles";

const LandingPage = () => {
  const { data, error, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return <Message text="Landing page Loading..." />;
  }
  if (error) {
    return <Message text="Shop data fetch failed" />;
  }
  const list = data;
  return (
    <>
      <Advertisement />
      <div>
        <h1 className="h1">Categories</h1>
      </div>
      <ShopContainer>
        <Grid>
          {list.map((category) => (
            <ShopItem key={category.id} item={category} />
          ))}
        </Grid>
      </ShopContainer>
    </>
  );
};

export default LandingPage;
