"use client";
import { useState } from "react";
import Login from "../../components/auth-page/login";
import SignUp from "../../components/auth-page/signup";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin && <Login setIsLogin={setIsLogin} />}
      {!isLogin && <SignUp setIsLogin={setIsLogin} />}
    </>
  );
};

export default AuthPage;
