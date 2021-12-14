import { v4 as uuidv4 } from "uuid";
// dummy data creation logig

const imagePathFinder = (categoryName) => {
  switch (categoryName) {
    case "electronics":
      return "images/electronics.png";
    case "jewelery":
      return "images/jewelery.png";
    case "men's clothing":
      return "images/mens-clothing.png";
    case "women's clothing":
      return "images/womens-clothing.png";
    default:
      throw Error("image data no match");
  }
};
export const createCategoryObject = (categoryName) => {
  return {
    id: uuidv4(),
    title: categoryName,
    imageUrl: imagePathFinder(categoryName),
  };
};
