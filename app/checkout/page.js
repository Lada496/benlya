"use client";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import CheckoutList from "../../components/checkout-page/checkout-list";
import Message from "../../components/ui/message";

const ChackoutPage = () => {
  const { data: session } = useSession();
  if (!session) {
    redirect("/auth");
  }
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <>
      <h1 className="h1">Checkout</h1>
      {(!cartItems || cartItems.length === 0) && (
        <Message text="No items added yet!" />
      )}
      {cartItems.length >= 1 && <CheckoutList list={cartItems} />}
    </>
  );
};

export default ChackoutPage;
