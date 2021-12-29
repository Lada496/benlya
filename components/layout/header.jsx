import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import { Label } from "semantic-ui-react";
import { resetCart } from "../../redux/cart/cart.actions";
import { resetWishlist } from "../../redux/wishlist/whishlist.actions";
import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
  IconContainer,
} from "./header.styles";
const updateWishlistHandler = async (wishlist) => {
  const resposnse = await fetch("/api/whishlist", {
    method: "PATCH",
    body: JSON.stringify({ wishlist }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await resposnse.json();
};
const Header = ({ setVisible, visible }) => {
  const wishlist = useSelector((state) => state.wishlist.products);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [session, loading] = useSession();
  const logoutHandler = async () => {
    try {
      await updateWishlistHandler(wishlist);
    } catch (error) {
      alert("Failed to upload wishlist!");
    }

    await signOut({ redirect: false });
    dispatch(resetCart());
    dispatch(resetWishlist());
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
      <Link href="/">
        <LogoContainer>BenLya</LogoContainer>
      </Link>
      <nav>
        <NavContainer>
          {!session && !loading && (
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
