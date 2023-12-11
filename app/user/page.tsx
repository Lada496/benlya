// This file has been sourced from: /beoshare/pages/user/index.js
import Components from "./components";

async function getServerSideProps(context) {
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
export default async function Page(props: any) {
  return <Components {...props} />;
}
