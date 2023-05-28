"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import CheckoutList from "../../components/checkout-page/checkout-list";
import Message from "../../components/ui/message";
import {
  useGetCartItemsQuery,
  refetchCartItemsCompleted,
} from "../../redux/api/cart/cart.api";

const ChackoutPage = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  if (!session) {
    redirect("/auth");
  }
  const { data, error, isFetching, refetch } = useGetCartItemsQuery();

  const cartItems = data?.cartItems;

  useEffect(() => {
    if (data.refetch) {
      console.log("run");
      refetch();
    }
  }, [data?.refetch]);

  useEffect(() => {
    console.log(data);
    if (data?.cartItems && data?.refetch) {
      dispatch(refetchCartItemsCompleted());
    }
  }, [data]);

  return (
    <>
      <h1 className="h1">Checkout</h1>
      {error && <Message text="⚠️ Cart items fetch failed" />}
      {isFetching && <Message text="loading" />}
      {(!data || cartItems.length === 0) && (
        <Message text="No items added yet!" />
      )}
      {cartItems.length >= 1 && <CheckoutList list={cartItems} />}
    </>
  );
};

export default ChackoutPage;
