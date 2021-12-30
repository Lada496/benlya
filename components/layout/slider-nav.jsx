import Link from "next/link";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/client";
import { Sidebar, Menu } from "semantic-ui-react";

const SliderNav = ({ visible, setVisible }) => {
  const categories = useSelector((state) => state.categories.categories);
  const [session, loading] = useSession();
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      onHide={() => setVisible(false)}
      vertical
      visible={visible}
      width="thin"
    >
      {categories.length === 0 ? (
        <Menu.Item>
          <Link href="/shop">Shop</Link>
        </Menu.Item>
      ) : (
        <>
          <Menu.Item>
            <Link href="/shop">Preview</Link>
          </Menu.Item>
          {categories.map((category, index) => (
            <Menu.Item key={index}>
              <Link href={`/shop/${category.path}`}>{category.title}</Link>
            </Menu.Item>
          ))}
        </>
      )}
      {session && (
        <Menu.Item>
          <Link href="/user">whishlist</Link>
        </Menu.Item>
      )}
    </Sidebar>
  );
};

export default SliderNav;
