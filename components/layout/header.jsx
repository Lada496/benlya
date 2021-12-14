import Link from "next/link";
import Image from "next/image";
import User from "../../icons/user.svg";
import Cart from "../../icons/cart.svg";

const Header = () => {
  return (
    <header>
      <Link href="/">
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
      </nav>
    </header>
  );
};

export default Header;
