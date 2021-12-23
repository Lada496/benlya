import { Provider } from "react-redux";
import { Provider as AuthProvider } from "next-auth/client";
import { wrapper } from "../redux/store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";
import Layout from "../components/layout/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";

function App({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Head>
          <meta charset="utf-8" />
          {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Italiana&family=Poiret+One&family=Spartan:wght@200;300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        {process.browser ? (
          <PersistGate
            persistor={store.__persistor}
            loading={<div>Loading</div>}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        ) : (
          <PersistGate persistor={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        )}
      </Provider>
    </AuthProvider>
  );
}

export default wrapper.withRedux(App);
