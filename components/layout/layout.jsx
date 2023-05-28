"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Segment, Sidebar } from "semantic-ui-react";
import Footer from "./footer";
import Header from "./header";
import SliderNav from "./slider-nav";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setVisible(false);
  }, [pathname]);

  return (
    <>
      <Header setVisible={setVisible} visible={visible} />
      <main>
        <Sidebar.Pushable as={Segment}>
          <SliderNav visible={visible} setVisible={setVisible} />
          <Sidebar.Pusher>
            <Segment>{children}</Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
