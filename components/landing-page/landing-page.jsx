import React from "react";
import Link from "next/link";
const DUMMY = [
  { name: "women's clothing", path: "/womens-clothing" },
  { name: "maleClothing", path: "/mens-clothing" },
  { name: "jewelery", path: "/jewelery" },
  { name: "electronics", path: "/electronics" },
];

const LandingPageComponent = () => {
  return (
    <div>
      <h1>Landing</h1>
      {DUMMY.map((category, index) => (
        <Link key={index} href={`/shop${category.path}`}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LandingPageComponent;
