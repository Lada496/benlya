import { useSelector } from "react-redux";
import Head from "next/head";
import { getSession } from "next-auth/client";

import { Row } from "react-bootstrap";
import CheckoutList from "../../components/checkout-page/checkout-list";
import Message from "../../components/ui/message";

const ChackoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Checkout Page" />
      </Head>
      <h1>Checkout</h1>
      {(!cartItems || cartItems.length === 0) && (
        <Message text="No items added yet!" />
      )}
      {cartItems.length >= 1 && <CheckoutList list={cartItems} />}
      <Row></Row>
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default ChackoutPage;
