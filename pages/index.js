import Head from "next/head";
import Shop from "../components/landing-page/shop";
const DUMMY = [
  { name: "women's clothing", path: "/womens-clothing" },
  { name: "maleClothing", path: "/mens-clothing" },
  { name: "jewelery", path: "/jewelery" },
  { name: "electronics", path: "/electronics" },
];

const LandingPage = () => {
  return (
    <>
      <Shop list={DUMMY} />
    </>
  );
};

export default LandingPage;
