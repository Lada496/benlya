import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { Row, Col, Card } from "react-bootstrap";
import {
  addItemToCartAction,
  clearItemFromCartAction,
} from "../../redux/cart/cart.actions";
import {
  addItemToWishlistAction,
  removeItemfromWishlistAction,
} from "../../redux/wishlist/whishlist.actions";
import ButtonContainer from "../ui/button-container";

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
    <>
      <Card style={{ maxWidth: "95%", margin: "6rem auto", border: "none" }}>
        <Row>
          <Col md={6} xs={12}>
            <Card.Img
              src={product.image}
              style={{ maxWidth: "25rem", display: "block", margin: "auto" }}
            />
          </Col>
          <Col md={6} xs={12}>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                ${product.price}
              </Card.Subtitle>
              <Card.Text>{product.description}</Card.Text>

              {!inCartlist && (
                <ButtonContainer
                  text="Add to cart"
                  clickHandler={addToCartHandler}
                />
              )}
              {inCartlist && (
                <ButtonContainer
                  text="remove from cart"
                  clickHandler={removeFromCartHandler}
                />
              )}

              {!inWishlist && (
                <ButtonContainer
                  text="Add to wishlist"
                  clickHandler={addToWishlistHandler}
                  styles={{ marginLeft: "0.5rem" }}
                  varient="outline-primary"
                />
              )}
              {inWishlist && (
                <ButtonContainer
                  text="remove from wishlist"
                  clickHandler={removeFromWishlistHandker}
                  styles={{ marginLeft: "0.5rem" }}
                  varient="outline-primary"
                />
              )}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ProductPageComponent;
