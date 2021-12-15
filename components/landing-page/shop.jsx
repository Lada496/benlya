import Link from "next/link";
import { useSelector } from "react-redux";
import ShopItem from "./shop-item";
import RowContainer from "../ui/row-container";

const Shop = () => {
  const categories = useSelector((state) => state.categories);
  console.log(categories);
  if (categories.isFetching) {
    return <p>Loading...</p>;
  }
  if (categories.errorMessage) {
    return <p>Shop data fetch failed</p>;
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
