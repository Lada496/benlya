import { useDispatch } from "react-redux";
import Image from "next/image";
import { Icon } from "semantic-ui-react";
import {
  removeItemFromCartAction,
  addItemToCartAction,
  clearItemFromCartAction,
} from "../../redux/cart/cart.actions";
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(addItemToCartAction(item));
  };
  const removeItemHandler = () => {
    dispatch(removeItemFromCartAction(item));
  };
  const clearItemHandler = () => {
    dispatch(clearItemFromCartAction(item));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={item.image} alt={item.title} width={200} height={200} />
      </ImageContainer>
      <TextContainer>{item.title}</TextContainer>
      <QuantityContainer>
        <div onClick={removeItemHandler}>&#10094;</div>
        <span>{item.quantity}</span>
        <div onClick={addItemHandler}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>${item.price}</TextContainer>
      <RemoveButtonContainer onClick={clearItemHandler}>
        <Icon name="trash" size="large" />
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
