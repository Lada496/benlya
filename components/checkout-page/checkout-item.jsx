"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Icon } from "semantic-ui-react";

import {
  addCartItem,
  removeCartItemOne,
  removeCartItemAll,
} from "../../redux/slice/cart/cart.slice";
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
    dispatch(addCartItem(item));
  };
  const removeItemHandler = () => {
    dispatch(removeCartItemOne(item));
  };
  const clearItemHandler = () => {
    dispatch(removeCartItemAll(item));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image
          src={item.image}
          alt={item.title}
          width={200}
          height={200}
          priority={false}
        />
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
