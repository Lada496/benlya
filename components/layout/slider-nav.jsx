"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Sidebar, Menu } from "semantic-ui-react";
import { useGetCategoriesQuery } from "../../redux/api/shop/shop.api";

const SliderNav = ({ visible, setVisible }) => {
  const { data, isLoading, error } = useGetCategoriesQuery();
  const { data: session } = useSession();

  if (isLoading || error) {
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
        <Menu.Item>
          <Link href="/shop">Shop</Link>
        </Menu.Item>
      </Sidebar>
    );
  }

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
      <Menu.Item>
        <Link href="/shop">Preview</Link>
      </Menu.Item>
      {data.map((category, index) => (
        <Menu.Item key={index}>
          <Link href={`/shop/${category.path}`}>{category.title}</Link>
        </Menu.Item>
      ))}

      {session && (
        <Menu.Item>
          <Link href="/user">whishlist</Link>
        </Menu.Item>
      )}
    </Sidebar>
  );
};

export default SliderNav;
