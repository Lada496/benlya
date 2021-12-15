import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import Head from "next/head";
import Layout from "../components/layout/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

// const WrappedApp = ({ Component, pageProps }) => {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// };

// export default wrapper.withRedux(WrappedApp);

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width-device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
