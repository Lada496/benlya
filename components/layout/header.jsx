import Link from "next/link";
import Image from "next/image";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./header.module.css";
import User from "../../icons/user.svg";
import Cart from "../../icons/cart.svg";
import Heart from "../../icons/heart.svg";

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
            {/* <Nav className="me-auto"></Nav> */}
            <Nav
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <Nav.Link>
                <Link href="/shop">Shop</Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/auth">
                  Login
                  {/* <a>
                    <Image src={User} alt="auth" width={30} height={30} />
                  </a> */}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/user">
                  {/* <a>
                    <Image src={Heart} alt="whishlist" width={30} height={30} />
                  </a> */}
                  Wishlist
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/checkout">
                  {/* <a>
                    <Image src={Cart} alt="checkout" width={30} height={30} />
                  </a> */}
                  Checkout
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Link href="/">
        <a>
          <h1>E-SHOP</h1>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/auth">
              <a>
                <Image src={User} alt="auth" width={30} height={30} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/user">
              <a>
                <Image src={User} alt="user" width={30} height={30} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/checkout">
              <a>
                <Image src={Cart} alt="checkout" width={30} height={30} />
              </a>
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
