"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useGetWishlistQuery } from "../../redux/api/wishlist/wishlist.api";
import ProductsList from "../../components/products-list/products-list";
import Message from "../../components/ui/message";

const WishListPage = () => {
  const { data: session } = useSession();

  if (!session) {
    redirect("/auth");
  }
  const { data, isFetching, error, refetch } = useGetWishlistQuery();

  useEffect(() => {
    refetch();
  }, [session]);

  if (error) return <Message text="⚠️ Failed to fetch wishlist" />;
  if (isFetching) return <Message text="Loading..." />;

  return <ProductsList categoryObject={data} />;
};

export default WishListPage;
