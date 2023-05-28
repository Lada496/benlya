"use client";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import CheckoutList from "../../components/checkout-page/checkout-list";
import Message from "../../components/ui/message";
import { useGetCartItemsQuery } from "../../redux/api/cart/cart.api";

const ChackoutPage = () => {
  const { data: session } = useSession();
  if (!session) {
    redirect("/auth");
  }
  const { data: cartItems, error, isFetching } = useGetCartItemsQuery();

  return (
    <>
      <h1 className="h1">Checkout</h1>
      {error && <Message text="⚠️ Cart items fetch failed" />}
      {isFetching && <Message text="loading" />}
      {(!cartItems || cartItems.length === 0) && (
        <Message text="No items added yet!" />
      )}
      {cartItems.length >= 1 && <CheckoutList list={cartItems} />}
    </>
  );
};

export default ChackoutPage;
