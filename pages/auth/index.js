import { useState } from "react";
import Head from "next/head";
import Login from "../../components/auth-page/login";
import SignUp from "../../components/auth-page/signup";
import Message from "../../components/ui/message";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Head>
        <title>{isLogin ? "Login" : "Sign Up"}</title>
        <meta name="description" content="Authentication Page" />
      </Head>
      {isLogin && <Login setIsLogin={setIsLogin} />}
      {!isLogin && <SignUp setIsLogin={setIsLogin} />}
      {/* <Message text="Comming soon..." /> */}
    </>
  );
};

export default AuthPage;
