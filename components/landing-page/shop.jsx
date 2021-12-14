import Link from "next/link";

const Shop = ({ list }) => {
  return (
    <div>
      <h1>Landing</h1>
      {list.map((category, index) => (
        <Link key={index} href={`/shop${category.path}`}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Shop;
