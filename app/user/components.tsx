"use client";
// This file has been sourced from: /beoshare/pages/user/index.js
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/client";
import ProductsList from "../../../components/products-list/products-list";
const WishListPage = (props) => {
  const router = useRouter();
  const session = useSession();
  const wishlist = useSelector((state) => state.wishlist);

  useEffect(() => {
    if (!session[0]) {
      router.replace("/auth");
    }
  }, [session, router]);

  return (
    <>
      <ProductsList categoryObject={wishlist} />
    </>
  );
};
export default WishListPage;
