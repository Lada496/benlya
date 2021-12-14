import Link from "next/link";
import ShopItem from "./shop-item";

const Shop = ({ list }) => {
  return (
    <div>
      <h1>Landing</h1>
      {list.map((category) => (
        <ShopItem key={category.id} item={category} />
      ))}
    </div>
  );
};

export default Shop;
