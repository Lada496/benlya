import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import ProductsList from "../../components/products-list/products-list";

const WishListPage = (props) => {
  const router = useRouter();
  const session = useSession();
  const wishlist = useSelector((state) => state.wishlist);

  useEffect(() => {
    if (!session[0]) {
      router.replace("/auth");
    }
  }, [session, router]);

  return (
    <>
      <Head>
        <title>Wish List</title>
        <meta name="description" content="User's wish list" />
      </Head>
      <ProductsList categoryObject={wishlist} />
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

export default WishListPage;
