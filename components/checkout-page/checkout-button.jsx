import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { resetCart } from "../../redux/cart/cart.actions";

const CheckoutButton = ({ price }) => {
  const dispatch = useDispatch();
  const priceForStripe = price * 100;
  const publishableKey = process.env.stripe_key;
  const onToken = (token) => {
    alert("Payment Successful");
    dispatch(resetCart());
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
