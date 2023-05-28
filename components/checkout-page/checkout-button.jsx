"use client";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useResetWishlistMutation } from "../../redux/api/wishlist/wishlist.api";
import {
  useResetCartMutation,
  startRefechCartItems,
} from "../../redux/api/cart/cart.api";

const CheckoutButton = ({ price }) => {
  const dispatch = useDispatch();
  const [resetCart] = useResetCartMutation();
  const [resetWishlist] = useResetWishlistMutation();

  const priceForStripe = price * 100;
  const publishableKey = process.env.stripe_key;
  const onToken = async (token) => {
    await resetCart();
    await resetWishlist();
    dispatch(startRefechCartItems());
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
