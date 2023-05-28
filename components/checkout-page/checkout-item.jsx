"use client";
import Image from "next/image";
import { Icon } from "semantic-ui-react";

import {
  useAddCartItemMutation,
  useRemoveCartItemOneMutation,
  useRemoveCartItemsAllMutation,
} from "../../redux/api/cart/cart.api";
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
  const [addCartItem] = useAddCartItemMutation();
  const [removeCartItemOne] = useRemoveCartItemOneMutation();
  const [removeCartItemAll] = useRemoveCartItemsAllMutation();

  const addItemHandler = async () => {
    await addCartItem({ cartItemToAdd: item });
  };
  const removeItemHandler = async () => {
    await removeCartItemOne({ cartItemToRemove: item });
  };

  const clearItemHandler = async () => {
    await removeCartItemAll({ cartItemToRemove: item });
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
