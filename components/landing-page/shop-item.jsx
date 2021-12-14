import Link from "next/link";

const ShopItem = ({ item }) => {
  console.log(item.path);
  return (
    // <h1>item</h1>
    <div
      style={{
        backgroundImage: `url(${item.imageUrl})`,
        height: "500px",
        width: "auto",
      }}
    >
      <Link href={`/shop/${item.path}`}>{item.title}</Link>
    </div>
  );
};

export default ShopItem;
