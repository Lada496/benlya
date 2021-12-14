// dummy data creation logig
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const pathFinder = (categoryName) => {
  switch (categoryName) {
    case "electronics":
      return "electronics";
    case "jewelery":
      return "jewelery";
    case "men's clothing":
      return "mens-clothing";
    case "women's clothing":
      return "womens-clothing";
    default:
      return "no-image";
  }
};
export const createCategoryObject = async (categoryName) => {
  const fetchName = categoryName.replace(" ", "%20");
  const productsByCategory = await axios.get(
    `https://fakestoreapi.com/products/category/${fetchName}`
  );
  console.log(productsByCategory);
  return {
    id: uuidv4(),
    title: categoryName,
    path: pathFinder(categoryName),
    imageUrl: `images/${pathFinder(categoryName)}.jpg`,
    products: productsByCategory.data,
  };
};
