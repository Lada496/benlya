import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { Grid } from "semantic-ui-react";
import {
  addItemToCartAction,
  clearItemFromCartAction,
} from "../../redux/cart/cart.actions";
import {
  addItemToWishlistAction,
  removeItemfromWishlistAction,
} from "../../redux/wishlist/whishlist.actions";
import {
  ItemContainer,
  ImageContainer,
  TitleContainer,
  TextContainer,
  ButtonContainer,
} from "./product-page.styles";

import RatingContainer from "../ui/rating-container";

const ProductPageComponent = ({ product }) => {
  const [session, loading] = useSession();
  const router = useRouter();
  const wishlist = useSelector((state) => state.wishlist.products);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isIncluded = (item) => item.id === product.id;
  const [inWishlist, setInWishlist] = useState(wishlist.some(isIncluded));
  const [inCartlist, setInCartlist] = useState(cartItems.some(isIncluded));
  useEffect(() => {
    setInWishlist(wishlist.some(isIncluded));
  }, [wishlist]);

  useEffect(() => {
    setInCartlist(cartItems.some(isIncluded));
  });

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    if (!session && !loading) {
      router.push("/auth");
      return;
    }
    dispatch(addItemToCartAction(product));
  };

  const removeFromCartHandler = () => {
    if (!session && !loading) {
      router.push("/auth");
      return;
    }
    dispatch(clearItemFromCartAction(product));
  };

  const addToWishlistHandler = () => {
    if (!session && !loading) {
      router.push("/auth");
      return;
    }
    dispatch(addItemToWishlistAction(product));
  };

  const removeFromWishlistHandker = () => {
    if (!session && !loading) {
      router.push("/auth");
      return;
    }
    dispatch(removeItemfromWishlistAction(product));
  };

  return (
    <ItemContainer>
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <ImageContainer>
            <Image width={700} height={700} src={product.image} />
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
