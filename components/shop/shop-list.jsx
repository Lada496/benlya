import Link from "next/link";
import ShopItem from "./shop-item";

const ShopList = ({ category }) => {
  const productList =
    category.products.length <= 4
      ? category.products
      : category.products.slice(0, 4);
  return (
    <>
      <title>{category.category}</title>
      {productList.map((item) => (
        <ShopItem key={item.id} item={item} />
      ))}
      <Link href={`/shop/${category.routePath}`}>View More</Link>
    </>
  );
};

export default ShopList;
