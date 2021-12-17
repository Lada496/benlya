import { useDispatch } from "react-redux";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { resetCart } from "../../redux/cart/cart.actions";
import classes from "./header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const [session, loading] = useSession();
  const logoutHandler = async () => {
    await signOut({ redirect: false });
    dispatch(resetCart());
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
              <Link href="/shop">Shop</Link>
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
