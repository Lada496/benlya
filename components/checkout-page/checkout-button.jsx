"use client";
import StripeCheckout from "react-stripe-checkout";
import { useResetWishlistMutation } from "../../redux/api/wishlist/wishlist.api";
import { useResetCartMutation } from "../../redux/api/cart/cart.api";

const CheckoutButton = ({ price }) => {
  const [resetCart] = useResetCartMutation();
  const [resetWishlist] = useResetWishlistMutation();

  const priceForStripe = price * 100;
  const publishableKey = process.env.stripe_key;
  const onToken = async (token) => {
    // dispatch(resetCart());
    await resetCart();
    // delete purchased items from wishlist
    await resetWishlist();
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
