import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { resetCart } from "../../redux/cart/cart.actions";
import { removeItemfromWishlistAction } from "../../redux/wishlist/whishlist.actions";

const CheckoutButton = ({ price }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const priceForStripe = price * 100;
  const publishableKey = process.env.stripe_key;
  const onToken = (token) => {
    dispatch(resetCart());

    // delete purchased items from wishlist
    for (const item of cartItems) {
      dispatch(removeItemfromWishlistAction(item));
    }
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="CHECKOUT"
      name="E-SHOP"
      //   image={brandLogo}
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default CheckoutButton;
