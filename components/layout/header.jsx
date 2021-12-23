import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import { resetCart } from "../../redux/cart/cart.actions";
import { resetWishlist } from "../../redux/wishlist/whishlist.actions";
import { Icon } from "semantic-ui-react";
import {
  HeaderContainer,
  //   HamburgerMenuContaier,
  LogoContainer,
  NavContainer,
} from "./header.styles";
const Header = () => {
  const categories = useSelector((state) => state.categories.categories);
  const wishlist = useSelector((state) => state.wishlist.products);
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
  return (
    <HeaderContainer>
      <Icon name="sidebar" size="big" inverted />
      <LogoContainer href="/">
        <a>BeOshare</a>
      </LogoContainer>
      <nav>
        <NavContainer>
          {!session && !loading && (
            <li>
              <Link href="/auth">
                <Icon name="user" size="large" inverted />
              </Link>
            </li>
          )}
          {session && (
            <li>
              <Icon name="sign-out" size="large" inverted />
            </li>
          )}
          <li>
            <Link href="/checkout">
              <Icon name="shopping cart" size="large" inverted />
            </Link>
          </li>
        </NavContainer>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
