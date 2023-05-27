"use client";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useDeleteWishlistItemMutation } from "../../redux/api/wishlist/wishlist.api";
import { resetCart } from "../../redux/slice/cart/cart.slice";

const CheckoutButton = ({ price }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const priceForStripe = price * 100;
  const publishableKey = process.env.stripe_key;
  const onToken = (token) => {
    dispatch(resetCart());
    // delete purchased items from wishlist
    for (const item of cartItems) {
      useDeleteWishlistItemMutation(item);
    }
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="CHECKOUT"
      name="E-SHOP"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default CheckoutButton;
