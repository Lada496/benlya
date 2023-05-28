import ReduxProvider from "../client/providers/redux-provider";
import AuthProvider from "../client/providers/auth-provider";
import StyledComponentsRegistry from "../lib/resistry";
import Layout from "../components/layout/layout";

import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&family=Poiret+One&family=Spartan:wght@200;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          <ReduxProvider>
            <StyledComponentsRegistry>
              <Layout>{children}</Layout>
            </StyledComponentsRegistry>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

export default RootLayout;
