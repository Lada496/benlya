import Link from "next/link";
import { useSelector } from "react-redux";
import ShopItem from "./shop-item";
import RowContainer from "../ui/row-container";
import Message from "../ui/message";

const Shop = () => {
  const categories = useSelector((state) => state.categories);
  if (categories.isFetching) {
    return <Message text="Loading..." />;
  }
  if (categories.errorMessage) {
    return <Message text="Shop data fetch failed"/>;
  }
  const list = categories.categories;

  return (
    <div>
      <Link href="/shop">
        <a>
          <h1>Shop</h1>
        </a>
      </Link>
      <RowContainer>
        {list.map((category) => (
          <ShopItem key={category.id} item={category} />
        ))}
      </RowContainer>
    </div>
  );
};

export default Shop;
