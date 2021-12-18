import Link from "next/link";

import { useSelector } from "react-redux";
import ShopItem from "./shop-item";
import RowContainer from "../ui/row-container";
import Message from "../ui/message";
import Advertisement from "./advertisement";

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
        <h1>Categories</h1>
        <RowContainer>
          {list.map((category) => (
            <ShopItem key={category.id} item={category} />
          ))}
        </RowContainer>
      </div>
    </>
  );
};

export default Shop;
