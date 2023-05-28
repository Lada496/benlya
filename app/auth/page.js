"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Login from "../../components/auth-page/login";
import SignUp from "../../components/auth-page/signup";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { data: session } = useSession();

  if (session) {
    redirect("/");
  }

  return (
    <>
      {isLogin && <Login setIsLogin={setIsLogin} />}
      {!isLogin && <SignUp setIsLogin={setIsLogin} />}
    </>
  );
};

export default AuthPage;
