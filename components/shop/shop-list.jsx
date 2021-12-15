import Link from "next/link";
import ProductItem from "../products-list/product-item";
import RowContainer from "../ui/row-container";

const ShopList = ({ category }) => {
  const filteredList =
    category.products.length <= 4
      ? category.products
      : category.products.slice(0, 4);
  return (
    <>
      <h2>{category.title}</h2>
      <RowContainer>
        {filteredList.map((item) => (
          //   <ShopItem key={item.id} item={item} />
          <ProductItem key={item.id} item={item} />
        ))}
      </RowContainer>
      <Link href={`/shop/${category.path}`}>
        <a
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            display: "block",
          }}
        >
          Go to {category.title} page
        </a>
      </Link>
    </>
  );
};

export default ShopList;
