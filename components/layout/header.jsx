"use client";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Label } from "semantic-ui-react";
import { resetCart } from "../../redux/slice/cart/cart.slice";
// import { resetWishlist } from "../../redux/wishlist/whishlist.actions";
import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
  IconContainer,
} from "./header.styles";

const Header = ({ setVisible, visible }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { data: session, status } = useSession();
  const logoutHandler = async () => {
    await signOut({ redirect: false });
    dispatch(resetCart());
  };
  const showSidebarHandler = () => {
    setVisible(true);
  };
  return (
    <HeaderContainer>
      <IconContainer
        onClick={showSidebarHandler}
        name={visible ? "close" : "bars"}
        size="big"
        inverted
      />
      <LogoContainer href="/">BenLya</LogoContainer>
      <nav>
        <NavContainer>
          {!session && !status.loading && (
            <li>
              <Link href="/auth">
                <IconContainer name="user" size="large" inverted />
              </Link>
            </li>
          )}
          {session && (
            <li onClick={logoutHandler}>
              <IconContainer name="sign-out" size="large" inverted />
            </li>
          )}
          <li>
            <Link href="/checkout">
              <IconContainer name="shopping cart" size="large" inverted>
                {cartItems.length >= 1 && (
                  <Label color="teal" floating>
                    {cartItems.length}
                  </Label>
                )}
              </IconContainer>
            </Link>
          </li>
        </NavContainer>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
