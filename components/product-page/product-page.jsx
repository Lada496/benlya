"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Grid } from "semantic-ui-react";

import {
  addCartItem,
  removeCartItemAll,
} from "../../redux/slice/cart/cart.slice";

import {
  useGetWishlistQuery,
  useAddWishlistItemMutation,
  useDeleteWishlistItemMutation,
} from "../../redux/api/wishlist/wishlist.api";
import {
  ItemContainer,
  ImageContainer,
  TitleContainer,
  TextContainer,
  ButtonContainer,
} from "./product-page.styles";

import RatingContainer from "../ui/rating-container";

const ProductPageComponent = ({ product }) => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isIncluded = (item) => item?.id === product.id;
  const [inWishlist, setInWishlist] = useState(false);
  const [inCartlist, setInCartlist] = useState(cartItems.some(isIncluded));
  const { data, error, isFetching } = useGetWishlistQuery();
  const [addWishlistItem] = useAddWishlistItemMutation();
  const [deleteWishlistItem] = useDeleteWishlistItemMutation();

  const wishlist = data?.products;
  useEffect(() => {
    setInWishlist(wishlist?.some(isIncluded));
  }, [wishlist]);

  useEffect(() => {
    setInCartlist(cartItems.some(isIncluded));
  }, [cartItems]);

  const addToCartHandler = () => {
    if (!session && !status.loading) {
      router.push("/auth");
      return;
    }
    dispatch(addCartItem(product));
  };

  const removeFromCartHandler = () => {
    if (!session && !status.loading) {
      router.push("/auth");
      return;
    }
    dispatch(removeCartItemAll(product));
  };

  const addToWishlistHandler = async () => {
    if (!session && !status.loading) {
      router.push("/auth");
      return;
    }
    await addWishlistItem({ wishlist: product }).unwrap();
  };

  const removeFromWishlistHandker = async () => {
    if (!session && !status.loading) {
      router.push("/auth");
      return;
    }
    await deleteWishlistItem({ productId: product.id }).unwrap();
  };
  if (error || isFetching) {
    return <div>Wait</div>;
  }

  return (
    <ItemContainer>
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <ImageContainer>
            <Image
              width={300}
              height={300}
              src={product.image}
              alt={product.title}
              priority={false}
            />
          </ImageContainer>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <TitleContainer>{product.title}</TitleContainer>
          <TitleContainer>${product.price}</TitleContainer>
          <RatingContainer
            rate={product.rating.rate}
            count={product.rating.count}
            size="huge"
            position={true}
          />
          <TextContainer>{product.description}</TextContainer>

          {!inCartlist && (
            <ButtonContainer
              color="black"
              textColor="white"
              onClick={addToCartHandler}
            >
              Add to cart
            </ButtonContainer>
          )}
          {inCartlist && (
            <ButtonContainer
              color="black"
              textColor="white"
              onClick={removeFromCartHandler}
            >
              remove from cart
            </ButtonContainer>
          )}

          {!inWishlist && (
            <ButtonContainer
              onClick={addToWishlistHandler}
              color="white"
              textColor="black"
            >
              Add to wishlist
            </ButtonContainer>
          )}
          {inWishlist && (
            <ButtonContainer
              color="white"
              textColor="black"
              onClick={removeFromWishlistHandker}
            >
              remove from wishlist
            </ButtonContainer>
          )}
        </Grid.Column>
      </Grid>
    </ItemContainer>
  );
};

export default ProductPageComponent;
