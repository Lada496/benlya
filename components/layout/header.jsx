import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { resetCart } from "../../redux/cart/cart.actions";
import { resetWishlist } from "../../redux/wishlist/whishlist.actions";
import classes from "./header.module.css";
import DropdownItem from "./dropdown-item";

const updateWishlistHandler = async (wishlist) => {
  const resposnse = await fetch("/api/whishlist", {
    method: "PATCH",
    body: JSON.stringify({ wishlist }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await resposnse.json();
};

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
    <header className={classes.nav}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <a style={{ textDecoration: "none", color: "white" }}>E-SHOP</a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              {categories.length === 0 ? (
                <Link href="/shop">Shop</Link>
              ) : (
                <NavDropdown title="Shop" id="navbarScrollingDropdown">
                  <Link href="/shop">
                    <a
                      style={{
                        color: "#212529",
                        paddingLeft: "0.5rem",
                        display: "block",
                      }}
                    >
                      Preview
                    </a>
                  </Link>
                  <NavDropdown.Divider />
                  {categories.map((category, index) => (
                    <DropdownItem
                      category={category}
                      key={index}
                      index={index}
                      length={categories.length}
                    />
                  ))}
                </NavDropdown>
              )}

              {!session && !loading && <Link href="/auth">Login</Link>}
              <Link href="/user">Wishlist</Link>
              <Link href="/checkout">Checkout</Link>
              {session && (
                <Button onClick={logoutHandler} variant="outline-light">
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
