import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./header.module.css";

const Header = () => {
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
              <Link href="/auth">Login</Link>
              <Link href="/user">Wishlist</Link>
              <Link href="/checkout">Checkout</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
