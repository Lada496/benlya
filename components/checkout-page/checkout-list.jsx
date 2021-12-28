import CheckoutButton from "./checkout-button";
import CheckoutItem from "./checkout-item";
import { Message } from "semantic-ui-react";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
} from "./checkout-list.styles";

const CheckoutList = ({ list }) => {
  const totalPrice = list.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <>
      <Message color="yellow" style={{ width: "90%", margin: "2rem auto" }}>
        * Use the following dummy credit card for payment test *
        <br />
        4242 4242 4242 4242 - Exp: future date - CVC: 123
      </Message>
      <CheckoutPageContainer>
        <CheckoutHeaderContainer>
          <HeaderBlockContainer>
            <span>Image</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Name</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Quantity</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Price</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Remove</span>
          </HeaderBlockContainer>
        </CheckoutHeaderContainer>

        {list.map((item) => (
          <CheckoutItem item={item} key={item.id} />
        ))}
        <TotalContainer>Total: ${totalPrice}</TotalContainer>
        <CheckoutButton price={totalPrice} />
      </CheckoutPageContainer>
    </>
  );
};

export default CheckoutList;
