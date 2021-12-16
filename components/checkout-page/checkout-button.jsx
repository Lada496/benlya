import StripeCheckout from "react-stripe-checkout";

const CheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.stripe_key;
  const onToken = (token) => {
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
