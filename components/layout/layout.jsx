import { useState } from "react";
import { Segment, Sidebar } from "semantic-ui-react";
import Footer from "./footer";
import Header from "./header";
import SliderNav from "./slider-nav";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const segmentStyle = {
    margin: "0",
    boxShadow: "none !important",
    border: "none",
    padding: "0",
    borderRadius: "0",
  };
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
