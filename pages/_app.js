// import { Provider } from "react-redux";
// import { useStore } from "../redux/store";
import { wrapper } from "../redux/store";
import Layout from "../components/layout/layout";

const WrappedApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(WrappedApp);

// export default function App({ Component, pageProps }) {
//   const store = useStore(pageProps.initialReduxState);
//   return (
//     <Provider store={store}>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </Provider>
//   );
// }
