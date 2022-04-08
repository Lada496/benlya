import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Segment, Sidebar } from "semantic-ui-react";
import Footer from "./footer";
import Header from "./header";
import SliderNav from "./slider-nav";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setVisible(false);
  }, [router.asPath]);

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
