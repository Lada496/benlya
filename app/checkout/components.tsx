"use client";
// This file has been sourced from: /beoshare/pages/checkout/index.js
import { useSelector } from "react-redux";
import CheckoutList from "../../../components/checkout-page/checkout-list";
import Message from "../../../components/ui/message";
const ChackoutPage = () => {
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
