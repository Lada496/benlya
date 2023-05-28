"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Icon } from "semantic-ui-react";

// import {
//   addCartItem,
//   removeCartItemOne,
//   removeCartItemAll,
// } from "../../redux/slice/cart/cart.slice";
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
  const dispatch = useDispatch();
  const addItemHandler = async () => {
    // dispatch(addCartItem(item));
    await addCartItem({ cartItemToAdd: item });
  };
  const removeItemHandler = async () => {
    // dispatch(removeCartItemOne(item));
    await removeCartItemOne({ cartItemToRemove: item });
  };
  const clearItemHandler = async () => {
    // dispatch(removeCartItemAll(item));
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
