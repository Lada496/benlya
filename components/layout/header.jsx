"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useDispatch } from "react-redux";
import { Label } from "semantic-ui-react";
// import { resetCart } from "../../redux/slice/cart/cart.slice";
// import { resetWishlist } from "../../redux/wishlist/whishlist.actions";
import {
  cartApi,
  useGetCartItemsQuery,
  useResetCartMutation,
} from "../../redux/api/cart/cart.api";
import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
  IconContainer,
} from "./header.styles";

const Header = ({ setVisible, visible }) => {
  const dispatch = useDispatch();
  const {
    data: cartItems,
    error,
    isFetching,
    refetch,
  } = useGetCartItemsQuery();
  const [resetCart] = useResetCartMutation();

  const { data: session, status } = useSession();
  const logoutHandler = async () => {
    await resetCart();
    await signOut({ redirect: false });
  };
  const showSidebarHandler = () => {
    setVisible(true);
  };

  useEffect(() => {
    refetch();
  }, [session]);
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
                {!error && !isFetching && cartItems.length >= 1 && (
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
