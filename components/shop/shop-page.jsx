//delete
import React from "react";
import ShopList from "./shop-list";
const DUMMY = [
  {
    category: "women's clothing",
    routePath: "womens-clothing",
    products: [
      { id: 1, title: "product1" },
      { id: 2, title: "product2" },
      { id: 3, title: "product3" },
      { id: 4, title: "product4" },
      { id: 5, title: "product5" },
    ],
  },
  {
    category: "men's clothing",
    routePath: "mens-clothing",
    products: [
      { id: 6, title: "product6" },
      { id: 7, title: "product7" },
      { id: 8, title: "product8" },
      { id: 9, title: "product9" },
      { id: 10, title: "product10" },
    ],
  },
  {
    category: "jewelery",
    routePath: "jewelery",
    products: [
      { id: 11, title: "product11" },
      { id: 12, title: "product12" },
      { id: 13, title: "product13" },
    ],
  },
  {
    routePath: "electronics",
    products: [
      { id: 14, title: "product14" },
      { id: 15, title: "product15" },
      { id: 16, title: "product16" },
    ],
  },
];

const ShopPageComponent = () => {
  return (
    <>
      {DUMMY.map((category, index) => (
        <ShopList key={index} category={category} />
      ))}
    </>
  );
};
export default ShopPageComponent;
